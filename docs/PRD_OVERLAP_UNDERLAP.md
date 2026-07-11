# PRD Overlap and Underlap

Source compared: [`blind_spot_decoder_mvp_prd.md`](./blind_spot_decoder_mvp_prd.md)

## Overlap (implemented or partially implemented)

### Product flow overlap
- Landing -> setup -> interview -> analyzing -> results exists.
- Short prompt sequence exists (currently 3 prompts).
- Text-only and multimodal intake modes exist.
- Lead-gate UX exists on results screen.

### Output overlap
- Returns Blind Spot Score.
- Returns top blind spot and secondary blind spot.
- Includes impact statement and growth leverage.
- Includes starter roadmap list.

### Technical overlap
- Next.js + React + Tailwind stack in place.
- Server-side analysis endpoint exists (`/api/analyze`).
- Lead capture + email send endpoint exists (`/api/send-report`).
- Supabase-backed lead table schema defined.

## Underlap (PRD asks for more than current build)

### Product depth gaps
- PRD expects top 3 blind spots; current response is top + secondary.
- PRD calls for trigger/friction map and communication style summary; not implemented.
- PRD describes adaptive follow-up prompts; current prompts are static.

### AI architecture gaps
- PRD specifies Gemini Live + embeddings + vector retrieval; current build is single-shot `generateContent`.
- No embedding-backed pattern retrieval yet.
- No explicit subscore model for all 6 categories.

### Conversion/ops gaps
- CRM connector not implemented (capture is in Supabase only).
- DM continuation and booking pathways are not implemented.
- Analytics funnel events and model quality metrics are not implemented.

### Trust and safety gaps
- No explicit rate limiting on API routes yet.
- No CAPTCHA/bot mitigation on lead capture yet.
- RLS/policy hardening for Supabase table still pending.

## Suggested sequencing to close underlap
1. Add 6-category subscore output schema and UI rendering.
2. Add adaptive prompt loop and one follow-up turn.
3. Add retrieval layer (embeddings + vector store) for pattern grounding.
4. Add analytics instrumentation for funnel + model quality.
5. Add RLS and abuse controls on submission endpoints.
