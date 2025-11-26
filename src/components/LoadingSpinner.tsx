import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-hr-offwhite text-hr-green">
      <Loader2 className="h-12 w-12 animate-spin text-hr-orange" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;