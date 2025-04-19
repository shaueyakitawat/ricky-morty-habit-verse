
import React from 'react';
import { Award } from '@/types/habit';
import { cn } from '@/lib/utils';
import { useAppMode } from '@/contexts/AppModeContext';
import { Progress } from '@/components/ui/progress';
import { DynamicIcon } from './DynamicIcon';

interface AwardItemProps {
  award: Award;
}

const AwardItem: React.FC<AwardItemProps> = ({ award }) => {
  const { mode } = useAppMode();
  const progressPercent = (award.progress / award.maxProgress) * 100;
  
  return (
    <div className={cn(
      "relative p-4 rounded-lg mb-3 transition-all duration-300 hover:scale-[1.02]",
      award.unlocked 
        ? 'bg-gradient-to-r from-spacedark/80 to-spacedark' 
        : 'bg-spacedark/80',
      award.unlocked 
        ? 'border border-yellow-500/30' 
        : 'border border-gray-700'
    )}>
      <div className="flex items-center">
        <div className={cn(
          "h-12 w-12 rounded-full flex items-center justify-center mr-4",
          award.unlocked 
            ? 'bg-yellow-500/20 text-yellow-400' 
            : 'bg-gray-800 text-gray-500'
        )}>
          <DynamicIcon name={award.icon} size={24} />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <h3 className={cn(
              "font-medium",
              award.unlocked ? 'text-yellow-400' : 'text-white'
            )}>
              {award.name}
              {award.unlocked && (
                <span className="ml-2 text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full">
                  Unlocked
                </span>
              )}
            </h3>
          </div>
          <p className="text-sm text-gray-400 mb-2">{award.description}</p>
          <div className="flex items-center">
            <div className="w-full mr-3">
              <Progress 
                value={progressPercent}
                className={cn(
                  "h-2",
                  award.unlocked 
                    ? 'bg-gray-800' 
                    : 'bg-gray-900'
                )}
                indicatorClassName={
                  award.unlocked 
                    ? 'bg-yellow-500' 
                    : mode === 'action' ? 'bg-rickblue' : 'bg-portalgreen'
                }
              />
            </div>
            <span className="text-xs text-gray-400">
              {award.progress}/{award.maxProgress}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardItem;
