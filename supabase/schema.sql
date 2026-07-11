create table if not exists public.blindspot_email_captures (
  id bigint generated always as identity primary key,
  email text not null unique,
  blind_spot_score integer not null,
  top_blind_spot text not null,
  secondary_blind_spot text not null,
  growth_leverage text not null,
  narrative_driver text not null,
  impact_statement text not null,
  starter_roadmap jsonb not null default '[]'::jsonb,
  email_sent boolean not null default false,
  sent_at timestamptz,
  resend_message_id text,
  send_error text,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create index if not exists blindspot_email_captures_email_sent_idx
  on public.blindspot_email_captures (email_sent);
