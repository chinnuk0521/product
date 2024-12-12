import { z } from 'zod';

const envSchema = z.object({
  VITE_GEMINI_API_KEY: z.string().min(1, 'Gemini API key is required'),
});

export type Env = z.infer<typeof envSchema>;

/**
 * Validates required environment variables and provides helpful error messages
 */
export function validateEnvironment(): Env {
  const env = {
    VITE_GEMINI_API_KEY: import.meta.env.VITE_GEMINI_API_KEY,
  };

  try {
    return envSchema.parse(env);
  } catch (error) {
    const message = `
Environment Error:
- VITE_GEMINI_API_KEY is not set in environment variables

Please follow these steps:
1. Create a .env file in the project root
2. Get your Gemini API key from Google AI Studio:
   https://makersuite.google.com/app/apikey
3. Add the API key to your .env file:
   VITE_GEMINI_API_KEY=your_api_key_here
4. Restart the development server

Note: Never commit your .env file to version control!
    `.trim();

    throw new Error(message);
  }
}