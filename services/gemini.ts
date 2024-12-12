import { GoogleGenerativeAI } from '@google/generative-ai';
import { GEMINI_MODEL } from '../config/constants';
import { GEMINI_CONFIG, SAFETY_SETTINGS } from '../config/gemini';
import { validateEnvironment } from '../utils/environment';

const env = validateEnvironment();
const genAI = new GoogleGenerativeAI(env.VITE_GEMINI_API_KEY);

export async function getRecommendations(prompt: string) {
  try {
    const model = genAI.getGenerativeModel({ 
      model: GEMINI_MODEL,
      generationConfig: GEMINI_CONFIG,
      safetySettings: SAFETY_SETTINGS,
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    if (error instanceof Error) {
      // Improve error message for API key issues
      if (error.message.includes('API_KEY_INVALID')) {
        throw new Error('Invalid Gemini API key. Please check your .env file and ensure you have added a valid API key.');
      }
      throw new Error(`Failed to get recommendations: ${error.message}`);
    }
    throw new Error('Failed to get recommendations');
  }
}