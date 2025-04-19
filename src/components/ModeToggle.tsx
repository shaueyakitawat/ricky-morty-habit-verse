
import React from 'react';
import { Moon, Zap } from 'lucide-react';
import { useAppMode } from '@/contexts/AppModeContext';
import { cn } from '@/lib/utils';

const ModeToggle: React.FC = () => {
  const { mode, toggleMode } = useAppMode();
  
  return (
    <button 
      onClick={toggleMode}
      className={cn(
        "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300",
        mode === 'action' 
          ? 'bg-rickblue text-white animate-pulse-glow' 
          : 'bg-portalgreen text-white'
      )}
      aria-label="Toggle app mode"
    >
      {mode === 'action' ? (
        <Zap className="h-6 w-6" />
      ) : (
        <Moon className="h-6 w-6" />
      )}
    </button>
  );
};

export default ModeToggle;
