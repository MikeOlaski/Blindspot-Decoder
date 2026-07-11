export interface AssessmentResult {
  blind_spot_score: number;
  top_blind_spot: string;
  secondary_blind_spot: string;
  growth_leverage: string;
  narrative_driver: string;
  impact_statement: string;
  starter_roadmap: string[];
}

export type AppState = 'landing' | 'setup' | 'interview' | 'analyzing' | 'results';

export const PROMPTS = [
  "Tell me about a recent interaction that left you frustrated.",
  "What feedback do you tend to dismiss or resist?",
  "When do you feel most certain that you're right?"
];
