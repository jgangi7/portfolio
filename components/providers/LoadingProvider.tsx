import React, { createContext, useContext, useState } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  loadedComponents: Set<string>;
  setLoadedComponent: (componentId: string) => void;
  isComponentLoaded: (componentId: string) => boolean;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedComponents] = useState(() => new Set<string>());

  const setLoadedComponent = (componentId: string) => {
    loadedComponents.add(componentId);
  };

  const isComponentLoaded = (componentId: string) => {
    return loadedComponents.has(componentId);
  };

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
        loadedComponents,
        setLoadedComponent,
        isComponentLoaded,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
} 