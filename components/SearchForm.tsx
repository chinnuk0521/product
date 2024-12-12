import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';

interface SearchFormProps {
  onSearch: (preferences: string) => Promise<void>;
  loading: boolean;
}

export function SearchForm({ onSearch, loading }: SearchFormProps) {
  const [preferences, setPreferences] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (preferences.trim()) {
      onSearch(preferences);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <div className="flex gap-4">
        <input
          type="text"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
          placeholder="Enter your preferences (e.g., 'I like outdoor sports and technology')"
          className="flex-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <button
          type="submit"
          disabled={loading || !preferences.trim()}
          className="bg-indigo-600 text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? (
            <Loader2 className="animate-spin" />
          ) : (
            <Search />
          )}
          Get Recommendations
        </button>
      </div>
    </form>
  );
}