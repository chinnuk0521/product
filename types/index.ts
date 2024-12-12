export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface RecommendationRequest {
  userPreferences: string;
  productHistory: Product[];
}

export interface RecommendationResponse {
  recommendations: Product[];
  explanation: string;
}