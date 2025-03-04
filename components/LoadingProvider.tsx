import { createContext, useContext, useState, ReactNode, ComponentType, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

// Animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

// HOC to wrap sections with loading guard
export const withLoadingGuard = (WrappedComponent: ComponentType, delay: number = 0) => {
  return function WithLoadingGuard(props: any) {
    const { heroLoaded } = useLoading();
    const [showSection, setShowSection] = useState(false);

    useEffect(() => {
      if (heroLoaded) {
        const timer = setTimeout(() => {
          setShowSection(true);
        }, delay);
        return () => clearTimeout(timer);
      } else {
        setShowSection(false);
      }
    }, [heroLoaded]);

    return (
      <AnimatePresence mode="wait">
        {showSection && heroLoaded && (
          <motion.div
            key="section"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <WrappedComponent {...props} />
          </motion.div>
        )}
      </AnimatePresence>
    );
  };
}; 