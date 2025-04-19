
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
        "fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-500",
        mode === 'action' 
          ? 'bg-gradient-to-tr from-portalcyan to-plasmapink text-white animate-pulse-glow border-2 border-portalcyan/50' 
          : 'bg-gradient-to-tr from-chillteal to-chilllavender text-white border-2 border-chillteal/50'
      )}
      aria-label="Toggle app mode"
    >
      <div className={cn(
        "absolute inset-0 rounded-full opacity-20",
        mode === 'action' ? 'animate-glitch' : 'animate-float'
      )}></div>
      
      {mode === 'action' ? (
        <Zap className="h-7 w-7" />
      ) : (
        <Moon className="h-7 w-7" />
      )}
    </button>
  );
};

export default ModeToggle;
