# Data Model

## Supabase table: `public.blindspot_email_captures`
Defined in [`../supabase/schema.sql`](../supabase/schema.sql)

### Columns
- `id` bigint identity primary key
- `email` text unique
- `blind_spot_score` integer
- `top_blind_spot` text
- `secondary_blind_spot` text
- `growth_leverage` text
- `narrative_driver` text
- `impact_statement` text
- `starter_roadmap` jsonb
- `email_sent` boolean
- `sent_at` timestamptz nullable
- `resend_message_id` text nullable
- `send_error` text nullable
- `updated_at` timestamptz
- `created_at` timestamptz

## Data policy
- Store only what is needed for report delivery and follow-up qualification.
- Do not store raw audio/video blobs in current MVP.
- Keep env keys server-side only.
