# API Contracts

## `POST /api/analyze`

### Request
```json
{
  "qaPairs": [{ "question": "string", "answer": "string" }],
  "frames": ["data:image/jpeg;base64,..."]
}
```

### Success `200`
```json
{
  "blind_spot_score": 67,
  "top_blind_spot": "Intensity Blind Spot",
  "secondary_blind_spot": "Defensiveness Blind Spot",
  "growth_leverage": "conviction and standards",
  "narrative_driver": "If I ease up, quality drops",
  "impact_statement": "...",
  "starter_roadmap": ["...", "...", "..."]
}
```

### Failure `400/500`
- `400`: Invalid payload
- `500`: AI provider failure (including quota exhaustion)

## `POST /api/send-report`

### Request
```json
{
  "email": "user@example.com",
  "result": {
    "blind_spot_score": 67,
    "top_blind_spot": "...",
    "secondary_blind_spot": "...",
    "growth_leverage": "...",
    "narrative_driver": "...",
    "impact_statement": "...",
    "starter_roadmap": ["...", "...", "..."]
  }
}
```

### Success `200`
```json
{
  "ok": true,
  "id": "re_xxx"
}
```

### Failure `400/500/502`
- `400`: Invalid email or payload
- `500`: Missing env configuration
- `502`: Supabase or Resend upstream failure
