import { createClient } from '@supabase/supabase-js';

export const IGNITERC_TABLE = 'igniterc_registrations';
export const IGNITERC_LOGO_BUCKET = 'igniterc-logos';
export const MAX_LOGO_BYTES = 10 * 1024 * 1024;

export const LOGO_TYPES = Object.freeze({
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
});

export const GENDER_OPTIONS = Object.freeze([
  'Woman',
  'Man',
  'Transgender',
  'Non-binary/non-conforming',
  'Prefer not to respond',
]);

export function jsonResponse(payload, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      ...extraHeaders,
    },
  });
}

export function getSupabaseAdmin() {
  const rawUrl = process.env.SUPABASE_URL;
  const supabaseUrl = rawUrl?.startsWith('http')
    ? rawUrl
    : 'https://dzzblbrmdaryttwplfrb.supabase.co';
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!serviceRoleKey) return null;

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

export function cleanText(value, maxLength) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

export function normalizePhone(value) {
  const raw = cleanText(value, 40);
  if (!raw) return null;

  let phone = raw.replace(/[\s()-]/g, '');
  if (phone.startsWith('00')) phone = `+${phone.slice(2)}`;
  if (phone.startsWith('0')) phone = `+94${phone.slice(1)}`;
  if (phone.startsWith('94')) phone = `+${phone}`;

  return /^\+\d{7,15}$/.test(phone) ? phone : null;
}

export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function getLogoExtension(contentType) {
  return LOGO_TYPES[contentType] ?? null;
}

export function isSubmissionId(value) {
  return typeof value === 'string'
    && /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}
