import { useState } from 'react';
import { RecommendationResponse } from '../types';
import { getRecommendations } from '../services/gemini';
import { SAMPLE_PRODUCTS } from '../config/constants';
import { buildRecommendationPrompt } from '../utils/prompts';

interface UseRecommendationsReturn {
  recommendations: RecommendationResponse | null;
  loading: boolean;
  error: string | null;
  fetchRecommendations: (preferences: string) => Promise<void>;
}

export function useRecommendations(): UseRecommendationsReturn {
  const [recommendations, setRecommendations] = useState<RecommendationResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRecommendations = async (preferences: string) => {
    try {
      setLoading(true);
      setError(null);

      const prompt = buildRecommendationPrompt(preferences, SAMPLE_PRODUCTS);
      const response = await getRecommendations(prompt);
      
      try {
        const parsedResponse = JSON.parse(response);
        if (!parsedResponse.recommendations || !parsedResponse.explanation) {
          throw new Error('Invalid response format from AI');
        }
        setRecommendations(parsedResponse);
      } catch (parseError) {
        throw new Error('Failed to parse AI response');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      setError(errorMessage);
      setRecommendations(null);
    } finally {
      setLoading(false);
    }
  };

  return { recommendations, loading, error, fetchRecommendations };
}