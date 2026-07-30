import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// This is a server-side API route — never prerender it
export const prerender = false;

// ── Subject normalisation ────────────────────────────────────────────────────
// The form sends display labels; the quiz DB uses lowercase slugs
const SUBJECT_MAP = {
  'Physics':        'physics',
  'Chemistry':      'chemistry',
  'Biology':        'biology',
  'Combined Maths': 'maths',
};

const SUBJECT_SHORT = {
  physics:   'PHY',
  chemistry: 'CHE',
  biology:   'BIO',
  maths:     'MAT',
};

const SUBJECT_LABEL = {
  physics:   'Physics',
  chemistry: 'Chemistry',
  biology:   'Biology',
  maths:     'Combined Maths',
};

// ── Access-code generator ────────────────────────────────────────────────────
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no ambiguous chars (0/O, 1/I)

function generateCode(subjectSlug) {
  const prefix = SUBJECT_SHORT[subjectSlug] ?? 'XXX';
  let suffix = '';
  for (let i = 0; i < 4; i++) {
    suffix += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
  }
  return `${prefix}-${suffix}`;
}

async function generateUniqueCode(supabase, subjectSlug) {
  for (let attempt = 0; attempt < 20; attempt++) {
    const code = generateCode(subjectSlug);
    const { data } = await supabase
      .from('members')
      .select('id')
      .eq('access_code', code)
      .maybeSingle();
    if (!data) return code; // not taken
  }
  throw new Error(`Could not generate unique code for ${subjectSlug} after 20 attempts`);
}

// ── Phone formatter ──────────────────────────────────────────────────────────
function formatPhone(phone) {
  let p = (phone || '').trim();
  if (!p) return null;
  if (!p.startsWith('+94')) {
    if (p.startsWith('0')) p = p.substring(1);
    p = '+94' + p;
  }
  return p;
}

// ── Email HTML builder ───────────────────────────────────────────────────────
function buildEmailHtml({ schoolName, members, quizUrl }) {
  const rows = members.map(m => `
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #f0f0f0;font-size:14px;color:#111;">${m.name}${m.isCaptain ? ' <span style="font-size:11px;color:#6366f1;font-weight:600;">(Captain)</span>' : ''}</td>
      <td style="padding:12px 16px;border-bottom:1px solid #f0f0f0;font-size:14px;color:#555;">${SUBJECT_LABEL[m.subject]}</td>
      <td style="padding:12px 16px;border-bottom:1px solid #f0f0f0;">
        <span style="font-family:monospace;font-size:15px;font-weight:700;letter-spacing:3px;color:#111;background:#f5f5f5;padding:5px 12px;border-radius:5px;display:inline-block;white-space:nowrap;">${m.accessCode}</span>
      </td>
    </tr>`).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>THE SUMMONS — Access Codes</title>
</head>
<body style="margin:0;padding:0;background:#f6f6f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f6f6f6;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#111;padding:28px 40px;text-align:center;border-bottom:3px solid #60a5fa;">
              <p style="margin:0;font-size:11px;letter-spacing:3px;color:#888;text-transform:uppercase;">Evolvion '26 &nbsp;·&nbsp; Phase 01</p>
              <h1 style="margin:8px 0 0;font-size:22px;font-weight:700;letter-spacing:4px;color:#ffffff;">THE SUMMONS</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px 28px;">
              <p style="margin:0 0 4px;font-size:13px;color:#888;">Registration confirmed for</p>
              <h2 style="margin:0 0 28px;font-size:20px;font-weight:600;color:#111;">${schoolName}</h2>

              <p style="margin:0 0 12px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#888;">Access Codes</p>

              <!-- Codes table -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #f0f0f0;border-radius:6px;overflow:hidden;">
                <thead>
                  <tr style="background:#fafafa;">
                    <th style="padding:10px 16px;text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#888;border-bottom:1px solid #f0f0f0;">Member</th>
                    <th style="padding:10px 16px;text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#888;border-bottom:1px solid #f0f0f0;">Subject</th>
                    <th style="padding:10px 16px;text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#888;border-bottom:1px solid #f0f0f0;">Code</th>
                  </tr>
                </thead>
                <tbody>${rows}</tbody>
              </table>

              <!-- Divider -->
              <div style="border-top:1px solid #f0f0f0;margin:28px 0;"></div>

              <!-- How to enter -->
              <p style="margin:0 0 10px;font-size:13px;font-weight:600;color:#111;">How to enter on quiz day:</p>
              <ol style="margin:0;padding-left:18px;color:#555;font-size:13px;line-height:2;">
                <li>Visit <a href="${quizUrl}" style="color:#6366f1;text-decoration:none;font-weight:500;">${quizUrl}</a></li>
                <li>Enter your personal access code</li>
                <li>Wait — the quiz will go live automatically</li>
              </ol>

              <p style="margin:24px 0 0;font-size:12px;color:#aaa;line-height:1.7;">
                Each code is unique to one member. Please do not share it.<br>
                Keep this email — you will need your code on the day of the event.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;border-top:1px solid #f0f0f0;text-align:center;">
              <p style="margin:0;font-size:12px;color:#bbb;">D.S. Senanayake College Science Society &nbsp;·&nbsp; Evolvion '26</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}


// ── Main handler ─────────────────────────────────────────────────────────────
export const POST = async ({ request }) => {
  // Use process.env (runtime) NOT import.meta.env (build-time).
  // Astro/Vite bakes import.meta.env at build time — if the var isn't set
  // in Vercel at build time, it becomes the string "undefined" (truthy!),
  // which bypasses the || fallback and crashes createClient.
  const rawUrl = process.env.SUPABASE_URL;
  const supabaseUrl = (rawUrl && rawUrl.startsWith('http'))
    ? rawUrl
    : 'https://dzzblbrmdaryttwplfrb.supabase.co'; // fallback — URL is not secret

  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const resendKey   = process.env.RESEND_API_KEY;

  // Diagnose missing env vars
  console.log('[register] env check:', {
    supabaseUrl,
    hasKey: !!supabaseKey,
    hasResend: !!resendKey,
  });

  if (!supabaseKey) {
    console.error('[register] SUPABASE_SERVICE_ROLE_KEY is not set in Vercel env vars');
    return json500('Server misconfiguration: database key missing. Contact admin.');
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  const resend   = resendKey && resendKey !== 're_YOUR_API_KEY_HERE'
    ? new Resend(resendKey)
    : null;


  try {
    const data = await request.json();

    // ── 1. Validation ────────────────────────────────────────────────────────
    if (
      !data.schoolName    ||
      !data.presidentName ||
      !data.presidentContact ||
      !data.captainName   ||
      !data.captainContact ||
      !data.captainSubject ||
      !data.emailAddress
    ) {
      return json400('Missing required fields');
    }

    if (!data.confirmation) {
      return json400('You must confirm you are an official representative.');
    }

    // ── 2. Collect members ───────────────────────────────────────────────────
    // Each entry: { name, subjectSlug, isCaptain }
    const rawMembers = [
      { name: data.captainName,  subject: data.captainSubject,  isCaptain: true  },
      { name: data.member1Name,  subject: data.member1Subject,  isCaptain: false },
      { name: data.member2Name,  subject: data.member2Subject,  isCaptain: false },
      { name: data.member3Name,  subject: data.member3Subject,  isCaptain: false },
    ].filter(m => m.name && m.name.trim() && m.subject);

    if (rawMembers.length === 0) {
      return json400('At least the captain with a subject is required.');
    }

    // Map display labels → DB slugs
    const membersNorm = rawMembers.map(m => ({
      ...m,
      name: m.name.trim(),
      subjectSlug: SUBJECT_MAP[m.subject] ?? m.subject.toLowerCase().replace(/\s+/g, '_'),
    }));

    // Check for duplicate subjects within this registration
    const slugs = membersNorm.map(m => m.subjectSlug);
    if (new Set(slugs).size !== slugs.length) {
      return json400('Each member must have a different subject.');
    }

    // ── 3. Save to evo_registrations (the marketing DB table) ────────────────
    const { error: evoErr } = await supabase.from('evo_registrations').insert([{
      school_name:       data.schoolName,
      president_name:    data.presidentName,
      president_contact: formatPhone(data.presidentContact),
      mic_name:          data.micName   || null,
      mic_contact:       formatPhone(data.micContact),
      captain_name:      data.captainName,
      captain_contact:   formatPhone(data.captainContact),
      captain_subject:   data.captainSubject,
      member1_name:      data.member1Name    || null,
      member1_subject:   data.member1Subject || null,
      member2_name:      data.member2Name    || null,
      member2_subject:   data.member2Subject || null,
      member3_name:      data.member3Name    || null,
      member3_subject:   data.member3Subject || null,
      email:             data.emailAddress,
      confirmed:         data.confirmation === true || data.confirmation === 'on',
    }]);

    if (evoErr) {
      console.error('evo_registrations insert error:', evoErr);
      return json500('Database submission failed: ' + evoErr.message);
    }

    // ── 4. Create entry in registrations table (quiz system) ─────────────────
    const { data: regRow, error: regErr } = await supabase
      .from('registrations')
      .insert([{
        school_name:   data.schoolName,
        contact_email: data.emailAddress,
        status:        'active',
      }])
      .select('id')
      .single();

    if (regErr || !regRow) {
      console.error('registrations insert error:', regErr);
      // Non-fatal for UX — log and continue (codes won't be saved though)
      return json500('Failed to create quiz registration: ' + (regErr?.message ?? 'Unknown error'));
    }

    const registrationId = regRow.id;

    // ── 5. Generate unique access codes and insert members ───────────────────
    const membersWithCodes = [];

    for (const m of membersNorm) {
      const accessCode = await generateUniqueCode(supabase, m.subjectSlug);
      const { error: mErr } = await supabase.from('members').insert([{
        registration_id: registrationId,
        name:            m.name,
        subject:         m.subjectSlug,
        is_captain:      m.isCaptain,
        access_code:     accessCode,
      }]);

      if (mErr) {
        console.error(`members insert error for ${m.name}:`, mErr);
        // Continue — try to insert the rest
      }

      membersWithCodes.push({ ...m, accessCode });
    }

    // ── 6. Send email via Resend ─────────────────────────────────────────────
    const quizUrl = 'https://summons.ssdssc.com';

    if (resend) {
      const html = buildEmailHtml({
        schoolName: data.schoolName,
        members: membersWithCodes.map(m => ({
          name:       m.name,
          subject:    m.subjectSlug,
          accessCode: m.accessCode,
          isCaptain:  m.isCaptain,
        })),
        quizUrl,
      });

      const { error: emailErr } = await resend.emails.send({
        from:    'Evolvion\'26 <evolvion@ssdssc.com>',
        to:      [data.emailAddress],
        subject: `THE SUMMONS — Your Access Codes | ${data.schoolName}`,
        html,
      });

      if (emailErr) {
        console.error('Resend error:', emailErr);
        // Don't fail the whole registration for an email error
      }
    } else {
      console.warn('RESEND_API_KEY not configured — email not sent. Codes:', membersWithCodes.map(m => m.accessCode));
    }

    // ── 7. Return success with codes (useful for debugging / manual fallback) ─
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Registration submitted successfully! Check your email for access codes.',
        // Only include codes in response during development — remove in prod if desired
        members: membersWithCodes.map(m => ({
          name:       m.name,
          subject:    SUBJECT_LABEL[m.subjectSlug] ?? m.subjectSlug,
          accessCode: m.accessCode,
          isCaptain:  m.isCaptain,
        })),
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (err) {
    console.error('register handler error:', err);
    return json500('Internal server error: ' + err.message);
  }
};

export const GET = () => new Response('Method not allowed', { status: 405 });

// ── Helpers ──────────────────────────────────────────────────────────────────
function json400(msg) {
  return new Response(JSON.stringify({ error: msg }), { status: 400, headers: { 'Content-Type': 'application/json' } });
}
function json500(msg) {
  return new Response(JSON.stringify({ error: msg }), { status: 500, headers: { 'Content-Type': 'application/json' } });
}
