import { GenerationConfig, SafetySetting } from '@google/generative-ai';

export const GEMINI_CONFIG: GenerationConfig = {
  maxOutputTokens: 8192,
  temperature: 1,
  topP: 0.95,
};

export const SAFETY_SETTINGS: SafetySetting[] = [
  {
    category: 'HARM_CATEGORY_HATE_SPEECH',
    threshold: 'BLOCK_NONE',
  },
  {
    category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
    threshold: 'BLOCK_NONE',
  },
  {
    category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
    threshold: 'BLOCK_NONE',
  },
  {
    category: 'HARM_CATEGORY_HARASSMENT',
    threshold: 'BLOCK_NONE',
  },
];