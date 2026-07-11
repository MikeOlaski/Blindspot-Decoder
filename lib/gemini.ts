import 'server-only';
import { GoogleGenAI, Type } from '@google/genai';

const apiKey =
  process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';

const ai = new GoogleGenAI({
  apiKey,
});

export const analyzeBlindSpot = async (
  qaPairs: { question: string; answer: string }[],
  frames: string[] // base64 images
) => {
  if (!apiKey) {
    throw new Error('Missing Gemini API key. Set GEMINI_API_KEY in .env.local.');
  }

  const prompt = `
You are the Blind Spot Decoder, an expert behavioral analyst, executive coach, and perceptive mirror.
Your goal is to analyze the user's responses to a series of prompts, along with visual frames captured during their response (if any), to identify their primary communication and behavioral blind spot.

The 6 core blind spots are:
1. Control Blind Spot (managing, correcting, steering too much)
2. Defensiveness Blind Spot (protecting self-image, resisting feedback)
3. Intensity Blind Spot (force, urgency, certainty overwhelming intent)
4. Projection Blind Spot (assigning motives/shortcomings to others)
5. Validation Blind Spot (seeking agreement/recognition)
6. Avoidance Blind Spot (softening, delaying, intellectualizing)

Treat every blind spot as a strength that has drifted into overuse, protection, or distortion. 
Be perceptive, concise, warm, direct, credible, and growth-oriented. Never shame.

Here is the interview data:
${qaPairs.map((qa, i) => `Q${i + 1}: ${qa.question}\nA${i + 1}: ${qa.answer}`).join('\n\n')}

${frames.length > 0 ? `I have also provided ${frames.length} visual frames captured during their responses. Analyze their posture, tension, and visual composure trends.` : 'No visual frames were provided (Text-only mode).'}

Based on this data, generate the Blind Spot Report.
  `;

  const parts: any[] = [{ text: prompt }];

  // Add images if available (limit to max 10 to save tokens/time)
  const sampledFrames = frames.slice(0, 10);
  sampledFrames.forEach((frame) => {
    // frame is a data URL: data:image/jpeg;base64,...
    const base64Data = frame.split(',')[1];
    if (base64Data) {
      parts.push({
        inlineData: {
          data: base64Data,
          mimeType: 'image/jpeg',
        },
      });
    }
  });

  const response = await ai.models.generateContent({
    model: 'gemini-3.1-pro-preview',
    contents: { parts },
    config: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          blind_spot_score: {
            type: Type.INTEGER,
            description: 'A score from 0-100. 0-19: High self-awareness, 80-100: Major unseen pattern driving friction.',
          },
          top_blind_spot: {
            type: Type.STRING,
            description: 'The name of the top blind spot (e.g., "Intensity Blind Spot").',
          },
          secondary_blind_spot: {
            type: Type.STRING,
            description: 'The name of the secondary blind spot.',
          },
          growth_leverage: {
            type: Type.STRING,
            description: 'The positive strength or asset that sits beneath this blind spot (e.g., "conviction and standards").',
          },
          narrative_driver: {
            type: Type.STRING,
            description: 'The internal story driving the pattern (e.g., "If I ease up, quality drops").',
          },
          impact_statement: {
            type: Type.STRING,
            description: 'How this blind spot impacts others (e.g., "Your urgency may land as pressure and reduce openness around you").',
          },
          starter_roadmap: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: '3 practical steps to shift this pattern.',
          },
        },
        required: [
          'blind_spot_score',
          'top_blind_spot',
          'secondary_blind_spot',
          'growth_leverage',
          'narrative_driver',
          'impact_statement',
          'starter_roadmap',
        ],
      },
    },
  });

  if (!response.text) {
    throw new Error('Failed to generate report');
  }

  return JSON.parse(response.text);
};
