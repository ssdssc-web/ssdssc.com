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
      <td style="padding:10px 16px;border-bottom:1px solid #1e293b;color:#cbd5e1;">${m.name}</td>
      <td style="padding:10px 16px;border-bottom:1px solid #1e293b;color:#94a3b8;">${SUBJECT_LABEL[m.subject]}</td>
      <td style="padding:10px 16px;border-bottom:1px solid #1e293b;">
        <code style="background:#0f172a;color:#38bdf8;padding:4px 10px;border-radius:6px;font-size:15px;font-family:monospace;letter-spacing:2px;border:1px solid #1e3a5f;">${m.accessCode}</code>
        ${m.isCaptain ? '<span style="margin-left:8px;font-size:11px;color:#fbbf24;font-weight:600;">⚡ CAPTAIN</span>' : ''}
      </td>
    </tr>`).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#020817;font-family:'Segoe UI',sans-serif;">
  <div style="max-width:600px;margin:40px auto;background:#0a1628;border:1px solid #1e3a5f;border-radius:16px;overflow:hidden;">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#0369a1 0%,#6d28d9 100%);padding:36px 32px;text-align:center;">
      <div style="font-size:36px;margin-bottom:8px;">⚡</div>
      <h1 style="margin:0;color:#fff;font-size:26px;font-weight:800;letter-spacing:3px;">THE SUMMONS</h1>
      <p style="margin:6px 0 0;color:#bae6fd;font-size:13px;letter-spacing:2px;">EVOLVION '26 &nbsp;·&nbsp; PHASE 01</p>
    </div>

    <!-- Body -->
    <div style="padding:32px;">
      <p style="color:#94a3b8;font-size:15px;margin:0 0 8px;">You have been summoned.</p>
      <h2 style="margin:0 0 24px;color:#f1f5f9;font-size:20px;">${schoolName}</h2>

      <p style="color:#64748b;font-size:13px;text-transform:uppercase;letter-spacing:1px;margin:0 0 12px;">Access Codes</p>

      <!-- Codes table -->
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background:#0f172a;border-radius:10px;overflow:hidden;border:1px solid #1e293b;">
        <thead>
          <tr style="background:#111827;">
            <th style="padding:10px 16px;text-align:left;color:#475569;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Member</th>
            <th style="padding:10px 16px;text-align:left;color:#475569;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Subject</th>
            <th style="padding:10px 16px;text-align:left;color:#475569;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Access Code</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>

      <!-- Instructions -->
      <div style="margin-top:28px;background:#0f172a;border:1px solid #1e3a5f;border-radius:10px;padding:20px;">
        <p style="margin:0 0 10px;color:#94a3b8;font-size:14px;font-weight:600;">How to enter:</p>
        <ol style="margin:0;padding-left:20px;color:#64748b;font-size:13px;line-height:1.8;">
          <li>Go to <a href="${quizUrl}" style="color:#38bdf8;">${quizUrl}</a></li>
          <li>Enter your personal access code when prompted</li>
          <li>Wait for the quiz to go live — you'll be notified instantly</li>
        </ol>
      </div>

      <p style="margin-top:24px;color:#475569;font-size:12px;">
        Each code is unique to one member. Do not share your code with others.<br>
        Keep this email safe — you'll need your code on the day of the event.
      </p>
    </div>

    <!-- Footer -->
    <div style="padding:20px 32px;border-top:1px solid #1e293b;text-align:center;">
      <p style="margin:0;color:#334155;font-size:12px;">Evolvion '26 &nbsp;·&nbsp; D.S. Senanayake College Science Society</p>
    </div>
  </div>
</body>
</html>`;
}

// ── Main handler ─────────────────────────────────────────────────────────────
export const POST = async ({ request }) => {
  const supabaseUrl = import.meta.env.SUPABASE_URL
    || process.env.SUPABASE_URL
    || 'https://dzzblbrmdaryttwplfrb.supabase.co'; // fallback — URL is not secret

  const supabaseKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY
    || process.env.SUPABASE_SERVICE_ROLE_KEY;

  const resendKey = import.meta.env.RESEND_API_KEY
    || process.env.RESEND_API_KEY;

  // Diagnose missing env vars
  console.log('[register] env check:', {
    hasUrl: !!supabaseUrl,
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
        subject: `⚡ THE SUMMONS — Your Access Codes | ${data.schoolName}`,
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
