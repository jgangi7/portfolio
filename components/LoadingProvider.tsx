import { createContext, useContext, useState, ReactNode } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  heroLoaded: boolean;
  setHeroLoaded: (loaded: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  setIsLoading: () => {},
  heroLoaded: false,
  setHeroLoaded: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading, heroLoaded, setHeroLoaded }}>
      {children}
    </LoadingContext.Provider>
  );
}; 