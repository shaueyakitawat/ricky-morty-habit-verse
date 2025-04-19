
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Award, BarChart, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAppMode } from '@/contexts/AppModeContext';

const TabNavigation: React.FC = () => {
  const location = useLocation();
  const { mode } = useAppMode();
  
  const tabs = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/awards', icon: Award, label: 'Awards' },
    { path: '/insights', icon: BarChart, label: 'Insights' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-spacedark/80 backdrop-blur-md border-t border-gray-800 z-40">
      <div className="flex justify-around items-center py-3 px-2 max-w-screen-sm mx-auto">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          return (
            <Link
              key={tab.path}
              to={tab.path}
              className={cn(
                "flex flex-col items-center py-1 px-3 rounded-lg transition-colors",
                isActive ? 
                  (mode === 'action' ? 'text-rickblue' : 'text-portalgreen') : 
                  'text-gray-500'
              )}
            >
              <tab.icon size={22} className={cn(
                "mb-1",
                isActive && "animate-float"
              )} />
              <span className="text-xs font-medium">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TabNavigation;
