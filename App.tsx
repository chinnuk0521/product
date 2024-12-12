import React from 'react';
import { SearchForm } from './components/SearchForm';
import { RecommendationSection } from './components/RecommendationSection';
import { ErrorMessage } from './components/ErrorMessage';
import { useRecommendations } from './hooks/useRecommendations';

function App() {
  const { recommendations, loading, error, fetchRecommendations } = useRecommendations();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          AI-Powered Product Recommendations
        </h1>

        <SearchForm onSearch={fetchRecommendations} loading={loading} />
        
        {error && <ErrorMessage message={error} />}

        {recommendations && (
          <RecommendationSection 
            recommendations={recommendations.recommendations}
            explanation={recommendations.explanation}
          />
        )}
      </div>
    </div>
  );
}

export default App;