# Blind Spot Decoder — MVP PRD

## 1. Document overview

**Product name:** Blind Spot Decoder  
**Version:** MVP / Long-shot buildout  
**Product type:** Multimodal app-magnet / diagnostic micro app  
**Core motion:** live self-awareness assessment → insight reveal → lead capture → premium upsell  

### Product thesis
Most people cannot see the patterns that most strongly shape how they communicate, lead, react, sell, parent, or relate under pressure. A lightweight multimodal app can surface those hidden patterns quickly enough to feel magical, accurately enough to feel useful, and elegantly enough to convert curiosity into demand.

Blind Spot Decoder is a live multimodal assessment experience that lets a user stream short video, voice, and text into a landing-page chat interface and receive a structured readout of their hidden communication, identity, emotional, and behavioral blind spots.

The system uses real-time multimodal analysis plus embedding-backed retrieval to infer behavior patterns, self-justifying narratives, friction tendencies, and growth opportunities. It then returns a concise but compelling self-awareness report with a scorecard, blind spot categories, impact analysis, and a practical roadmap.

### Primary business objective
Generate qualified leads by giving users a fast, emotionally resonant, high-perceived-value insight experience that naturally transitions into a premium report, audit, coaching engagement, or custom AI implementation.

### Core promise
**See what you cannot currently see about how you show up.**

---

## 2. Product summary

Blind Spot Decoder is a browser-based, live multimodal assessment app. Users enter a conversational UI, optionally enable camera and microphone, answer a short guided prompt sequence, and receive an instant report on the blind spots most likely affecting their communication, leadership, relationships, brand, sales, or team dynamics.

The MVP is intentionally short, high-signal, and conversion-oriented.

### MVP outputs
- Blind Spot Score
- Top 3 blind spots
- Communication style summary
- Trigger / friction map
- Self-story or narrative decoder
- Strength-to-shadow analysis
- First-step transformation roadmap

### Why this matters
Most assessments ask users to self-report. Blind Spot Decoder goes further by combining:
- what they say
- how they say it
- how they visually present under tension or uncertainty
- how they respond to follow-up prompts
- how their behavior compares to known archetypal patterns

This makes the experience feel more revealing than a quiz and more practical than abstract personality content.

---

## 3. Goals and non-goals

### Goals
1. Deliver a fast, high-conviction insight experience in under 3 minutes.
2. Produce results that feel personalized, emotionally sticky, and share-worthy.
3. Capture email or DM opt-in at a strong conversion rate.
4. Create a clear bridge into premium services.
5. Validate that multimodal intake meaningfully increases perceived accuracy versus text-only assessment.
6. Reuse the same technical stack across multiple themed wrappers in future app magnets.

### Non-goals
1. Clinical or psychological diagnosis.
2. Comprehensive personality profiling.
3. Fine-grained scientific emotion detection claims.
4. Long onboarding or enterprise complexity in MVP.
5. High-frequency motion analysis beyond low-latency practical limits.

---

## 4. Target users

### Primary ICPs
1. Founders and operators who suspect their communication or leadership patterns are limiting growth.
2. Coaches, consultants, and experts who want insight into how they are perceived.
3. Professionals interested in emotional intelligence, self-awareness, communication, or brand presence.
4. Teams and leaders open to growth-oriented diagnostic tools.

### User motivations
- Curiosity about how they come across
- Desire for higher self-awareness
- Frustration with repeating patterns
- Interest in communication improvement
- Need for practical next steps, not abstract labels
- Attraction to fast, interactive tools over long-form content

### Emotional entry points
- “Why do I keep getting the same reaction from people?”
- “What am I not seeing about how I show up?”
- “What’s the pattern that keeps limiting me?”
- “Why does my intent not match my impact?”
- “What blind spot is costing me trust, influence, or ease?”

---

## 5. User value proposition

### One-line version
A live self-awareness app that reveals the blind spots shaping how you show up.

### Short pitch
Blind Spot Decoder watches, listens, and interprets how you communicate under light pressure so it can surface hidden patterns in tone, rhetoric, posture, emotional framing, and self-story. In minutes, you get a structured readout of the blind spots most likely affecting your relationships, influence, leadership, or growth.

### Transformation statement
**From unseen pattern to visible leverage.**

---

## 6. Product positioning

### Category
Live multimodal self-awareness assessment.

### Framing
This is not a personality test.  
This is not therapy.  
This is not a generic quiz.  

This is a live behavioral mirror.

### Differentiators
- Multimodal input instead of questionnaire-only input
- Real-time conversational interaction
- Embedding-backed retrieval of similar behavioral patterns
- Actionable blind spot framing rather than static labels
- App-magnet format optimized for social, DM, and ad traffic

---

## 7. Experience overview

### Entry point
User arrives from:
- LinkedIn post
- X post
- Facebook ad
- short-form video
- DM CTA
- email campaign
- sales outreach

### Hero promise
**Discover the blind spot shaping how you show up.**

### Session promise
In under 3 minutes, get a readout of:
- what you may not see about your communication style
- where your intent and impact diverge
- which hidden pattern creates friction
- how to shift it

### Output promise
You’ll leave with:
- a blind spot score
- your top pattern
- where it tends to show up
- what it costs
- what to do next

---

## 8. Core user flow

### Step 1 — Landing page
User sees:
- headline
- short explainer
- trust framing
- privacy note
- CTA to begin

CTA examples:
- Start Your Blind Spot Scan
- Decode My Blind Spots
- See What I’m Missing

### Step 2 — Consent and framing
User is informed that:
- this is reflective, not clinical
- audio/video are optional
- results are interpretive and growth-oriented
- camera, microphone, and text can all be used

### Step 3 — Input mode selection
Modes:
- video + voice + text
- voice + text
- text-only
- uploaded clip plus text

### Step 4 — Guided interaction
System asks 3–5 compact prompts such as:
- Tell me about a recent situation where someone misunderstood you.
- What kind of people frustrate you most?
- What feedback do you tend to dismiss or resist?
- When do you feel most certain that you’re right?
- What happens when people don’t meet your standards or expectations?

### Step 5 — Live analysis
System:
- streams voice and/or video
- samples frames at 1 FPS for the free experience
- transcribes and chunks speech
- generates signal summaries
- asks adaptive follow-ups where useful

### Step 6 — Result reveal
User receives:
- Blind Spot Score
- Top blind spot
- Top trigger or context
- intent-vs-impact insight
- starter roadmap

### Step 7 — Lead capture
To unlock the full report:
- enter email
- request it by DM
- book a deeper session
- upgrade to premium

---

## 9. MVP scope

### In scope
- Single-page landing page
- Chat-style assessment interface
- Webcam and microphone support
- Text-only fallback
- Live or near-live transcript
- 1 FPS video frame sampling
- Structured feature extraction
- Result card with summary insight
- Email/DM gate for full report
- Embedding-backed retrieval for pattern matching
- Basic analytics and funnel events

### Out of scope for MVP
- Full account system
- Team dashboards
- Historical session timelines
- Granular emotion labeling claims
- Extensive customization by industry
- Deep CRM branching logic
- Multi-user collaboration

---

## 10. Long-shot buildout vision

This PRD covers the MVP but is designed so the same architecture expands into:
- leadership blind spot decoder
- sales blind spot decoder
- founder communication decoder
- coach presence decoder
- relationship blind spot decoder
- team mirror or meeting mirror tools

The engine remains constant. The wrapper, score labels, prompts, and outputs change.

---

## 11. Technical stack

### Front end
- Next.js
- React
- Tailwind CSS
- Browser media APIs / WebRTC capture
- WebSocket-based live session transport
- Chat-style UI with result card renderer

### Core AI stack
- Google Gemini Live API for low-latency multimodal interaction
- Google Gemini Embedding 2 for shared multimodal embeddings across transcript chunks, frame summaries, audio summaries, behavioral summaries, and exemplar patterns
- Vector database for retrieval of similar behavioral patterns and intervention templates

### Backend services
- Session orchestration service
- Media ingestion service
- Frame sampler
- Transcript service
- Signal extraction service
- Prompt orchestration layer
- Scoring engine
- Result generation service
- Lead capture and CRM connector
- Analytics pipeline

### Notes on free-tier feasibility
- Real-time streamed video processed with practical 1 FPS sampling
- Sufficient for posture, visible activation trends, composure shifts, and broad expression change tracking
- Not marketed as frame-accurate micro-expression analysis

---

## 12. System architecture

### Layer 1 — Live interaction layer
Purpose:
- receive video, audio, and text input
- maintain conversational session state
- drive interactive follow-up questions

Responsibilities:
- media stream intake
- transcript generation
- conversational turn handling
- UX state updates

### Layer 2 — Signal extraction layer
Purpose:
Convert raw multimodal input into structured features.

Feature categories:
- transcript language patterns
- tone and pacing summaries
- visible activation / composure trends
- posture or visual tension summaries
- self/other framing patterns
- certainty, blame, defensiveness, over-explaining, dismissal, control, or projection patterns

### Layer 3 — Embedding and retrieval layer
Purpose:
Use Gemini Embedding 2 to place multimodal session summaries, transcript chunks, frame summaries, and behavioral exemplars into one semantic space.

Use cases:
- retrieve similar behavioral patterns
- compare current session to known archetypal blind spot profiles
- retrieve intervention copy matched to pattern type
- cluster user responses for future refinement

### Layer 4 — Scoring and interpretation layer
Purpose:
Transform feature data into a human-readable assessment.

Outputs:
- blind spot scores
- top categories
- growth opportunity language
- impact statement
- starter roadmap

### Layer 5 — Conversion layer
Purpose:
Turn insight into lead capture and next action.

Outputs:
- email gate
- DM continuation
- upsell offer
- call booking prompt

---

## 13. Assessment model

### Core scoring philosophy
The product should identify shadows attached to strengths rather than insult the user.

For example:
- decisiveness can become rigidity
- confidence can become dismissal
- standards can become control
- empathy can become over-functioning
- drive can become intensity
- self-protection can become defensiveness

This framing makes the output feel intelligent and less adversarial.

### Top blind spot categories for MVP
Use 6 categories max.

1. **Control Blind Spot**  
You manage, correct, or steer more than you realize.

2. **Defensiveness Blind Spot**  
You protect your self-image by resisting, reframing, or dismissing feedback.

3. **Intensity Blind Spot**  
Your force, urgency, or certainty overwhelms your intent.

4. **Projection Blind Spot**  
You assign motives, meanings, or shortcomings to others that may reflect internal assumptions.

5. **Validation Blind Spot**  
You seek agreement, recognition, or affirmation in ways you may not notice.

6. **Avoidance Blind Spot**  
You soften, delay, intellectualize, or redirect instead of directly engaging what matters.

### Supporting dimensions
- certainty vs curiosity
- self-reference vs other-awareness
- standards vs flexibility
- reactivity vs regulation
- directness vs receptivity
- intent clarity vs impact awareness

### Positive dimension
- growth leverage

The app should always show the user what asset sits beneath the blind spot.

---

## 14. Blind Spot Score model

### Primary score
**Blind Spot Score**: 0–100  
A composite estimate of how much the user’s unseen patterns are likely affecting their effectiveness, trust, communication, or relationships in the assessed context.

### Score bands
- 0–19 — High self-awareness, low current friction
- 20–39 — Mild hidden patterning
- 40–59 — Moderate blind spot effect
- 60–79 — Strong hidden influence on outcomes
- 80–100 — Major unseen pattern driving repeated friction

### Subscores
- Control
- Defensiveness
- Intensity
- Projection
- Validation
- Avoidance
- Growth Leverage

### Example output
- Blind Spot Score: 67
- Top blind spot: Intensity
- Secondary blind spot: Defensiveness
- Growth leverage: conviction and standards

---

## 15. Signal model

### Text signals
Detect patterns such as:
- absolutist wording
- blame or responsibility transfer
- repeated justification
- certainty inflation
- moralizing language
- minimizing language
- over-explaining
- disconfirming feedback resistance
- othering or labeling language
- “I’m just being honest” patterns

### Voice signals
Detect broad cues such as:
- rising pressure under challenge
- clipped certainty
- pace acceleration around triggers
- tension in delivery
- sarcasm or disdain cues
- hesitancy during self-reflection
- tonal flattening during avoidance

### Visual signals
Track broad trends such as:
- posture rigidity
- activation shifts when discussing specific people or events
- visible tension spikes
- composure versus agitation trend
- leaning in or pulling back patterns
- restlessness during difficult moments

### Interaction signals
Track:
- willingness to answer directly
- capacity for self-reflection
- how follow-up prompts are handled
- whether user moves toward nuance or certainty

---

## 16. Input prompts

### Initial prompts
Use a small set of prompts optimized for revealing patterns quickly.

Examples:
1. Tell me about a recent interaction that left you frustrated.
2. What kind of people do you have the least patience for?
3. What feedback do you think people most often get wrong about you?
4. When are you hardest to talk to?
5. What do you wish people understood about your standards, intensity, or way of operating?

### Adaptive prompts
Based on live signals, ask questions like:
- What part of that feels most unfair to you?
- What are you protecting in that moment?
- What might the other person say is hard about your style?
- What do you assume about people when they don’t respond the way you want?
- Where do you think your intent and impact may diverge?

---

## 17. Output model

### Summary card
Required components:
1. Blind Spot Score
2. Top blind spot
3. Short explanation
4. Impact statement
5. Growth leverage
6. Starter roadmap

### Full report components
- top 3 blind spots
- where they most likely show up
- signature language patterns
- possible narrative driver
- intent vs impact map
- relationship or leadership implications
- first practices to implement
- recommended next step offer

### Example summary output
**Blind Spot Score: 67**  
Your strongest hidden pattern is **Intensity Blind Spot**.

You likely care deeply, move quickly, and hold strong standards. But under pressure, your urgency can land as pressure, dismissal, or over-force. People may experience more intensity from you than you realize.

**What it may cost:** trust, openness, and honest feedback.  
**What sits underneath it:** conviction, drive, and care.  
**First shift:** replace force with curiosity before correction.

---

## 18. Narrative decoder

One of the most valuable outputs is the internal narrative or identity pattern driving the blind spot.

Examples:
- “If I don’t hold the line, things fall apart.”
- “If I slow down, I lose control.”
- “If people misunderstand me, I need to explain harder.”
- “If I’m not validated, I may not matter.”
- “If I stay direct, at least I stay safe.”
- “If I stay detached, I can’t be hurt.”

This gives the output emotional depth and increases conversion potential.

---

## 19. Agent design

Keep the MVP agentic architecture small and purposeful.

### Agent 1 — Intake Guide
Responsibilities:
- welcome user
- explain experience
- gather consent
- prompt initial response
- keep user moving

### Agent 2 — Signal Extractor
Responsibilities:
- summarize transcript, tone, and visual trends
- produce structured feature objects
- tag likely blind spot indicators

### Agent 3 — Pattern Matcher
Responsibilities:
- compare extracted signals with blind spot archetype profiles
- retrieve similar patterns using vector search
- rank likely categories

### Agent 4 — Narrative Decoder
Responsibilities:
- infer the self-story or internal driver beneath the pattern
- translate it into humane language

### Agent 5 — Transformation Coach
Responsibilities:
- reframe blind spot as leverage opportunity
- generate starter roadmap
- preserve dignity and momentum

### Agent 6 — Conversion Guide
Responsibilities:
- present full report gate
- route to email capture, DM, or booking
- tailor CTA to score severity and context

---

## 20. Prompt strategy

### System tone
The assistant should be:
- perceptive
- concise
- warm
- direct
- credible
- lightly elevated
- growth-oriented
- never shaming
- never pseudo-clinical

### Core prompt instruction
Treat every blind spot as a strength that has drifted into overuse, protection, or distortion. Show the user what the pattern is, how it impacts others, what gift sits beneath it, and what first shift would increase awareness and effectiveness.

### Result-generation rules
Always include:
1. Blind Spot Score
2. Top category
3. Human explanation
4. Impact statement
5. Growth leverage
6. First-step roadmap

Avoid:
- diagnostic certainty
- moral judgment
- long disclaimers in the result body
- abstract jargon

---

## 21. Data schema

### Session object
```json
{
  "session_id": "uuid",
  "lead_source": "linkedin_post",
  "input_mode": "video_voice_text",
  "started_at": "timestamp",
  "duration_seconds": 94,
  "consent_given": true,
  "user_context": {
    "role": "founder",
    "goal": "self-awareness"
  }
}
```

### Frame summary object
```json
{
  "frame_id": "uuid",
  "timestamp_sec": 24,
  "visual_summary": "posture tightens and facial tension rises when describing team mistakes",
  "activation_score": 0.73,
  "composure_score": 0.31,
  "embedding_id": "vector_ref"
}
```

### Transcript chunk object
```json
{
  "chunk_id": "uuid",
  "timestamp_start": 18,
  "timestamp_end": 29,
  "text": "I just need people to think clearly and not make the same avoidable mistakes",
  "features": {
    "control": 0.71,
    "certainty": 0.76,
    "defensiveness": 0.28,
    "intensity": 0.64
  },
  "embedding_id": "vector_ref"
}
```

### Result object
```json
{
  "blind_spot_score": 67,
  "top_blind_spot": "Intensity Blind Spot",
  "secondary_blind_spot": "Control Blind Spot",
  "growth_leverage": "conviction and standards",
  "narrative_driver": "If I ease up, quality drops",
  "impact_statement": "Your urgency may land as pressure and reduce openness around you",
  "starter_roadmap": [
    "Pause before pushing",
    "Ask one clarifying question first",
    "Trade certainty for curiosity in the first response"
  ]
}
```

---

## 22. Retrieval design

### What gets embedded
Using Gemini Embedding 2, store embeddings for:
- transcript chunks
- frame summaries
- tone summaries
- session-level behavior summaries
- blind spot archetype exemplars
- best-fit intervention snippets
- upsell recommendation patterns

### Retrieval goals
- find similar blind spot signatures
- improve consistency of category matching
- support report personalization
- enable future longitudinal comparisons
- reduce hallucinated pattern naming by grounding outputs in matched exemplars

---

## 23. UX copy blocks

### Hero section
**Discover the blind spot shaping how you show up.**  
Stream a short clip or voice note and get a live readout of the hidden pattern affecting your communication, leadership, or relationships.

CTA: **Start My Blind Spot Scan**

### Intake helper copy
Tell me about a recent interaction that stayed with you.  
We’ll analyze what you say, how you say it, and where your intent may not match your impact.

### Waiting state copy
Reviewing your signal patterns.  
Looking for gaps between intent, style, and impact.  
Decoding your strongest hidden pattern.

### Result gate copy
Want the full breakdown?

Unlock:
- your top 3 blind spots
- your narrative driver
- where the pattern shows up most
- your leverage pathway
- your first practical reset plan

CTA: **Send My Full Report**

---

## 24. Premium offer pathways

After the MVP result, the user can be routed into one of several offers.

### Path A — Premium report
A longer written report with stronger personalization.

### Path B — Guided session
A deeper live blind spot decoding conversation.

### Path C — Business audit
For founders or coaches, connect personal blind spots to operational and communication systems.

### Path D — Custom app build
Offer a branded version of Blind Spot Decoder for the user’s own audience.

---

## 25. Privacy, safety, and trust

### Product trust copy
- This is a reflective self-awareness experience, not a clinical diagnosis.
- Video and audio help generate more personalized results.
- You can use voice-only or text-only modes if preferred.
- You choose what you share.

### Safety design rules
- Never present output as mental health diagnosis.
- Never shame or insult the user.
- Never overclaim hidden emotional certainty.
- Always offer growth-oriented language.
- Avoid protected-attribute inference.

---

## 26. Analytics and success metrics

### Funnel metrics
- landing page visit-to-start rate
- session start-to-complete rate
- average time to completion
- opt-in conversion rate
- DM continuation rate
- paid conversion rate

### Product quality metrics
- perceived accuracy score
- result share rate
- “too accurate” response rate
- follow-up engagement rate
- qualitative feedback on clarity and usefulness

### Model/product metrics
- top blind spot distribution
- input mode performance differences
- completion by device type
- false-negative or generic-output complaints
- response latency by mode

---

## 27. MVP acceptance criteria

### User experience
- User can start a session in under 15 seconds.
- User can choose video, voice, or text mode.
- Live session returns a result in under 3 minutes total.
- Result is readable in under 30 seconds.
- User can unlock the full report with one clear CTA.

### Technical
- Chat UI supports live multimodal input.
- 1 FPS frame summaries are captured and processed for free mode.
- Transcript chunks and frame summaries are embedded and retrievable.
- Scoring engine returns top blind spot plus subscores.
- Full report generation works for all supported input modes.

### Business
- Email/DM lead capture event fires correctly.
- Analytics events recorded for each funnel step.
- Upsell offers can be configured without code changes.

---

## 28. Build phases

### Phase 1 — MVP validation build
- landing page
- chat interface
- media permissions
- transcript flow
- simple multimodal prompt orchestration
- basic scorecard
- result card
- lead gate

### Phase 2 — Quality and grounding
- vector retrieval layer
- better archetype matching
- stronger full reports
- industry wrappers
- improved analytics

### Phase 3 — Productization
- account system
- session history
- comparison across time
- branded white-label versions
- CRM automations
- team or cohort modes

---

## 29. Risks and mitigations

### Risk 1 — Results feel generic
Mitigation:
- use adaptive prompts
- include specific quoted phrases from transcript
- add retrieval-backed examples
- anchor report to clear observed features

### Risk 2 — Users distrust video analysis claims
Mitigation:
- market as “expression and behavior trend decoding” not scientific micro-expression truth
- offer text-only fallback
- show transparent explanation of what is being interpreted

### Risk 3 — Latency hurts experience
Mitigation:
- use lightweight sampling
- reveal staged progress messages
- keep the free interaction brief
- prioritize speed over exhaustive depth in MVP

### Risk 4 — Output feels too harsh
Mitigation:
- shadow-of-strength framing
- growth leverage always included
- roadmap always constructive

### Risk 5 — Novelty without conversion
Mitigation:
- design result gate around practical value
- connect insights to money, trust, leadership, or relationship impact depending on audience

---

## 30. Recommended launch wrappers

The same engine can be launched under different wrappers for different audiences.

Examples:
- Blind Spot Decoder
- Leadership Blind Spot Scan
- Communication Friction Decoder
- Presence Decoder
- Founder Mirror
- Sales Blind Spot Scan

For the broadest initial rollout, use **Blind Spot Decoder** as the umbrella offer.

---

## 31. Final product summary

Blind Spot Decoder is a live multimodal app magnet built on the same stack as the previous concept, but with a more universal and premium framing. Users stream short video, voice, or text into a chat-style landing page experience. The system analyzes how they communicate, how they frame events, how they respond under light pressure, and how their visible composure or activation changes during the interaction. It then returns a blind spot score, top behavioral pattern, impact explanation, growth leverage, and starter roadmap. The free version is fast, high-signal, and conversion-oriented, while the deeper report and follow-on offers create the monetization path.

### Clean one-line handoff for a builder
Blind Spot Decoder is a browser-based multimodal assessment app that uses live video, audio, and text plus Gemini Live, Gemini Embedding 2, structured feature extraction, retrieval, and prompt orchestration to surface the user’s top communication or behavioral blind spots and convert that insight into lead capture and premium service demand.

