
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from '@/hooks/use-toast';
import { ToastVariant } from '@/types/habit';

type AppMode = 'action' | 'growth';

interface AppModeContextType {
  mode: AppMode;
  toggleMode: () => void;
  isActionMode: () => boolean;
  isGrowthMode: () => boolean;
}

const AppModeContext = createContext<AppModeContextType | undefined>(undefined);

export function AppModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<AppMode>('action');

  const toggleMode = () => {
    const newMode = mode === 'action' ? 'growth' : 'action';
    setMode(newMode);
    
    const variant: ToastVariant = newMode === 'action' ? 'default' : 'success';
    
    toast({
      title: newMode === 'action' ? 'Action Mode Activated!' : 'Growth Mode Activated',
      description: newMode === 'action' 
        ? "Time to get schwifty! Let's crush those habits." 
        : "Oh geez! Let's focus on personal development.",
      variant: variant,
    });
  };

  const isActionMode = () => mode === 'action';
  const isGrowthMode = () => mode === 'growth';

  return (
    <AppModeContext.Provider value={{ mode, toggleMode, isActionMode, isGrowthMode }}>
      {children}
    </AppModeContext.Provider>
  );
}

export function useAppMode() {
  const context = useContext(AppModeContext);
  if (context === undefined) {
    throw new Error('useAppMode must be used within a AppModeProvider');
  }
  return context;
}
