// Change this ISO 8601 value to control the production registration window.
// Keep the +05:30 offset so the deadline is expressed in Sri Lanka time.
export const registrations_open_until = '2026-12-31T23:59:59+05:30';

export function registrationsAreOpen(now = new Date()) {
  const deadline = Date.parse(registrations_open_until);
  return Number.isFinite(deadline) && now.getTime() < deadline;
}
