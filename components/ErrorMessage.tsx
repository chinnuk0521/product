import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 my-4">
      <div className="flex items-center">
        <AlertCircle className="text-red-500 mr-2" />
        <p className="text-red-700">{message}</p>
      </div>
    </div>
  );
}