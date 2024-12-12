import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { Sparkles } from 'lucide-react';

interface RecommendationSectionProps {
  recommendations: Product[];
  explanation: string;
}

export function RecommendationSection({ recommendations, explanation }: RecommendationSectionProps) {
  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-800">Personalized Recommendations</h2>
      </div>
      <p className="text-gray-600 mb-6">{explanation}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}