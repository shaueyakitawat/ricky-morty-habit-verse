
import React from 'react';
import { Habit } from '@/types/habit';
import { cn } from '@/lib/utils';
import { useAppMode } from '@/contexts/AppModeContext';
import { PlusCircle, Lightbulb } from 'lucide-react';
import { DynamicIcon } from './DynamicIcon';
import { toast } from '@/hooks/use-toast';

interface RecommendationCardProps {
  habit: Habit;
  onAdd: (habit: Habit) => void;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ habit, onAdd }) => {
  const { mode } = useAppMode();
  
  const handleAdd = () => {
    onAdd(habit);
    toast({
      title: "Habit added!",
      description: "New habit added to your dashboard.",
      variant: "success",
    });
  };
  
  return (
    <div className={cn(
      "p-4 rounded-lg mb-3 flex items-center justify-between",
      mode === 'action' ? 'morty-card' : 'rick-card',
      "transition-all duration-300 hover:scale-[1.02]"
    )}>
      <div className="flex items-center">
        <div className={cn(
          "h-10 w-10 rounded-full flex items-center justify-center mr-3",
          mode === 'action' 
            ? 'bg-rickblue/20 text-rickblue' 
            : 'bg-portalgreen/20 text-portalgreen'
        )}>
          <DynamicIcon name={habit.icon} size={20} />
        </div>
        <div>
          <div className="flex items-center">
            <h3 className="font-medium text-white">{habit.title}</h3>
            <Lightbulb size={14} className="ml-2 text-yellow-400" />
          </div>
          <p className="text-sm text-gray-400">{habit.description}</p>
        </div>
      </div>
      <button 
        onClick={handleAdd}
        className={cn(
          "ml-2 p-2 rounded-full",
          mode === 'action' 
            ? 'bg-rickblue/20 text-rickblue hover:bg-rickblue/30' 
            : 'bg-portalgreen/20 text-portalgreen hover:bg-portalgreen/30',
          "transition-colors"
        )}
      >
        <PlusCircle size={20} />
      </button>
    </div>
  );
};

export default RecommendationCard;
