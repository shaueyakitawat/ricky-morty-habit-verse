
import React from 'react';
import { Bell, Settings } from 'lucide-react';
import { useAppMode } from '@/contexts/AppModeContext';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const { mode } = useAppMode();
  
  return (
    <header className={cn(
      "flex justify-between items-center py-4 px-6 sticky top-0 backdrop-blur-md z-30 transition-colors duration-300",
      mode === 'action' ? 'border-b border-rickblue/20' : 'border-b border-portalgreen/20'
    )}>
      <div className="flex items-center">
        <div className={cn(
          "h-10 w-10 rounded-full neo-portal flex items-center justify-center mr-3",
          mode === 'action' ? 'border-2 border-rickblue' : 'border-2 border-portalgreen'
        )}>
          <span className="text-white font-bold">R&M</span>
        </div>
        <h1 className="text-xl font-bold text-white">
          Rick<span className={cn(
            mode === 'action' ? 'text-rickblue' : 'text-portalgreen'
          )}>&</span>Morty
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative text-gray-300 hover:text-white">
          <Bell size={20} />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-portalgreen"></span>
        </button>
        <button className="text-gray-300 hover:text-white">
          <Settings size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
