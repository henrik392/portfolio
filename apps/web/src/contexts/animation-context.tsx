'use client';

import { createContext, type ReactNode, useContext, useState } from 'react';

interface AnimationContextType {
  isAnimationEnabled: boolean;
  toggleAnimation: () => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined
);

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(true);

  const toggleAnimation = () => {
    setIsAnimationEnabled((prev) => !prev);
  };

  return (
    <AnimationContext.Provider value={{ isAnimationEnabled, toggleAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
}
