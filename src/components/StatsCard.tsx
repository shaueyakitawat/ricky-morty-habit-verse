
import React from 'react';
import { UserStats } from '@/types/habit';
import { cn } from '@/lib/utils';
import { useAppMode } from '@/contexts/AppModeContext';
import { BarChart, Award, Flame } from 'lucide-react';

interface StatsCardProps {
  stats: UserStats;
}

const StatsCard: React.FC<StatsCardProps> = ({ stats }) => {
  const { mode } = useAppMode();
  
  const statItems = [
    { 
      label: "Day Streak", 
      value: stats.streakDays, 
      icon: Flame,
      color: "text-orange-400" 
    },
    { 
      label: "Habits Done", 
      value: stats.completedHabits, 
      icon: BarChart,
      color: mode === 'action' ? "text-rickblue" : "text-portalgreen"
    },
    { 
      label: "Awards", 
      value: `${stats.awardsUnlocked}/${stats.totalAwards}`, 
      icon: Award,
      color: "text-yellow-400" 
    }
  ];

  return (
    <div className={cn(
      "grid grid-cols-3 gap-3 mb-6",
      "animate-fade-in"
    )}>
      {statItems.map((item, index) => (
        <div key={index} className="stat-card">
          <item.icon className={cn("h-6 w-6 mb-2", item.color)} />
          <span className="text-lg font-bold text-white">{item.value}</span>
          <span className="text-xs text-gray-400">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
