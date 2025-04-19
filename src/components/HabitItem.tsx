
import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import { Habit } from '@/types/habit';
import { cn } from '@/lib/utils';
import { useAppMode } from '@/contexts/AppModeContext';
import { toast } from '@/hooks/use-toast';
import { DynamicIcon } from './DynamicIcon';

interface HabitItemProps {
  habit: Habit;
  onToggleStatus: (id: string) => void;
}

const HabitItem: React.FC<HabitItemProps> = ({ habit, onToggleStatus }) => {
  const { mode } = useAppMode();
  
  const handleToggle = () => {
    onToggleStatus(habit.id);
    
    if (habit.status === 'incomplete') {
      toast({
        title: "Habit completed!",
        description: mode === 'action' 
          ? "You're killing it! Keep the momentum going." 
          : "Wonderful progress! Keep nurturing your growth.",
        variant: "success",
      });
    }
  };
  
  return (
    <div 
      className={cn(
        "habit-item",
        habit.status === 'complete' 
          ? 'habit-item-complete' 
          : 'habit-item-incomplete',
        "transition-all duration-300 hover:scale-[1.02]"
      )}
    >
      <div className="flex items-center">
        <div className="mr-3">
          <DynamicIcon name={habit.icon} size={24} className={cn(
            habit.status === 'complete' 
              ? 'text-portalgreen' 
              : mode === 'action' ? 'text-rickblue' : 'text-gray-400'
          )} />
        </div>
        <div>
          <h3 className={cn(
            "font-medium",
            habit.status === 'complete' 
              ? 'text-portalgreen' 
              : 'text-white'
          )}>
            {habit.title}
          </h3>
          <p className="text-sm text-gray-400">{habit.description}</p>
        </div>
      </div>
      <div className="flex items-center">
        {habit.streak > 0 && (
          <div className="mr-3 flex items-center">
            <span className={cn(
              "text-sm font-medium",
              mode === 'action' ? 'text-rickblue' : 'text-portalgreen'
            )}>
              {habit.streak} 🔥
            </span>
          </div>
        )}
        <button 
          onClick={handleToggle}
          className="text-gray-400 hover:text-white transition-colors"
        >
          {habit.status === 'complete' ? (
            <CheckCircle size={24} className="text-portalgreen" />
          ) : (
            <Circle size={24} />
          )}
        </button>
      </div>
    </div>
  );
};

export default HabitItem;
