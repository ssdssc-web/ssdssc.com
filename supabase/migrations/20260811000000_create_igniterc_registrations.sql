begin;

create extension if not exists pgcrypto;

create table if not exists public.igniterc_registrations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  school_name text not null,
  president_name text,
  president_contact text,
  master_in_charge_name text,
  mic_contact text,

  contestant_first_name text not null,
  contestant_last_name text not null,
  contestant_email text,
  contestant_phone text not null,
  contestant_gender text
    check (
      contestant_gender is null
      or contestant_gender in (
        'Woman',
        'Man',
        'Transgender',
        'Non-binary/non-conforming',
        'Prefer not to respond'
      )
    ),

  parent_first_name text not null,
  parent_last_name text not null,
  home_address text not null,
  parent_phone text not null,

  school_logo_path text,
  society_logo_path text
);

alter table public.igniterc_registrations enable row level security;

revoke all on table public.igniterc_registrations from anon, authenticated;
grant all on table public.igniterc_registrations to service_role;

insert into storage.buckets (
  id,
  name,
  public,
  file_size_limit,
  allowed_mime_types
)
values (
  'igniterc-logos',
  'igniterc-logos',
  false,
  10485760,
  array[
    'image/jpeg',
    'image/png',
    'image/webp'
  ]::text[]
)
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

commit;
