import { Product } from '../types';

export function buildRecommendationPrompt(preferences: string, productHistory: Product[]): string {
  return `Based on the following user preferences: "${preferences}", 
    and their purchase history of ${JSON.stringify(productHistory)}, 
    provide personalized product recommendations. 
    
    Consider the following factors:
    - User's stated preferences
    - Past purchase patterns
    - Price ranges of previous purchases
    - Product categories of interest
    
    Return the response in the following JSON format:
    {
      "recommendations": [
        {
          "id": "string",
          "name": "string",
          "description": "string",
          "price": number,
          "category": "string",
          "image": "string (use relevant Unsplash URLs)"
        }
      ],
      "explanation": "A detailed explanation of why these products were recommended"
    }
    
    Ensure recommendations are diverse but relevant to the user's interests.
    Include 3-5 products in the recommendations.
    Keep product descriptions concise but informative.`;
}