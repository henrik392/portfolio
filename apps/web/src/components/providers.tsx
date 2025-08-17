'use client';

import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { AnimationProvider } from '@/contexts/animation-context';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
    >
      <AnimationProvider>
        {children}
        <Toaster richColors />
      </AnimationProvider>
    </ThemeProvider>
  );
}
