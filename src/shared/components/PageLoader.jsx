import React from 'react';
import { Loader2 } from 'lucide-react';

export const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-background">
    <Loader2 className="animate-spin text-primary" size={48} />
  </div>
);
