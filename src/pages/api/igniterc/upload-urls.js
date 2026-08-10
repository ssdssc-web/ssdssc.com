import {
  getLogoExtension,
  getSupabaseAdmin,
  IGNITERC_LOGO_BUCKET,
  jsonResponse,
  MAX_LOGO_BYTES,
} from '../../../lib/ignitercRegistration.js';
import { registrationsAreOpen } from '../../../config/ignitercRegistration.js';

export const prerender = false;

const FILE_KEYS = Object.freeze([
  ['schoolLogo', 'school'],
  ['societyLogo', 'society'],
]);

function validateFileMetadata(file, label) {
  if (file == null) return { value: null };
  if (typeof file !== 'object') return { error: `${label} details are invalid.` };

  const size = Number(file.size);
  const type = typeof file.type === 'string' ? file.type : '';
  const extension = getLogoExtension(type);

  if (!Number.isInteger(size) || size <= 0) {
    return { error: `${label} is empty or invalid.` };
  }
  if (size > MAX_LOGO_BYTES) {
    return { error: `${label} must be 10 MB or smaller.`, status: 413 };
  }
  if (!extension) {
    return { error: `${label} must be a JPG, PNG, or WebP image.`, status: 415 };
  }

  return { value: { size, type, extension } };
}

export const POST = async ({ request }) => {
  if (!import.meta.env.DEV && !registrationsAreOpen()) {
    return jsonResponse({ error: 'Registrations are closed.', closed: true }, 403);
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid request.' }, 400);
  }

  const files = payload?.files;
  if (!files || typeof files !== 'object') {
    return jsonResponse({ error: 'No logo files were provided.' }, 400);
  }

  const validated = {};
  for (const [key, pathLabel] of FILE_KEYS) {
    const result = validateFileMetadata(
      files[key],
      pathLabel === 'school' ? 'School logo' : 'Society logo',
    );
    if (result.error) return jsonResponse({ error: result.error }, result.status ?? 400);
    validated[key] = result.value;
  }

  if (!validated.schoolLogo && !validated.societyLogo) {
    return jsonResponse({ error: 'No logo files were provided.' }, 400);
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.error('[igniterc/upload-urls] SUPABASE_SERVICE_ROLE_KEY is not configured');
    return jsonResponse({ error: 'Registration uploads are temporarily unavailable.' }, 500);
  }

  const submissionId = crypto.randomUUID();
  const uploads = {};

  for (const [key, pathLabel] of FILE_KEYS) {
    const file = validated[key];
    if (!file) continue;

    const path = `${submissionId}/${pathLabel}.${file.extension}`;
    const { data, error } = await supabase.storage
      .from(IGNITERC_LOGO_BUCKET)
      .createSignedUploadUrl(path, { upsert: false });

    if (error || !data?.signedUrl) {
      console.error('[igniterc/upload-urls] Could not create signed upload URL');
      return jsonResponse({ error: 'Could not prepare the logo upload.' }, 500);
    }

    uploads[key] = {
      path,
      signedUrl: data.signedUrl,
    };
  }

  return jsonResponse({ submissionId, uploads }, 201);
};

export const GET = () => jsonResponse(
  { error: 'Method not allowed.' },
  405,
  { Allow: 'POST' },
);
