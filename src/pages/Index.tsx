
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useAppMode } from '@/contexts/AppModeContext';
import { cn } from '@/lib/utils';
import { habits, recommendedHabits, userStats } from '@/data/sampleData';
import { Habit } from '@/types/habit';
import Header from '@/components/Header';
import ModeToggle from '@/components/ModeToggle';
import TabNavigation from '@/components/TabNavigation';
import HabitItem from '@/components/HabitItem';
import StatsCard from '@/components/StatsCard';
import RecommendationCard from '@/components/RecommendationCard';

const Index = () => {
  const { mode, isActionMode } = useAppMode();
  const [userHabits, setUserHabits] = useState<Habit[]>(habits);
  const [recommendations, setRecommendations] = useState<Habit[]>(recommendedHabits);
  
  const toggleHabitStatus = (id: string) => {
    setUserHabits(habits =>
      habits.map(habit =>
        habit.id === id
          ? { ...habit, status: habit.status === 'complete' ? 'incomplete' : 'complete' }
          : habit
      )
    );
  };
  
  const addHabit = (habit: Habit) => {
    setUserHabits(habits => [...habits, habit]);
    setRecommendations(recs => recs.filter(r => r.id !== habit.id));
  };
  
  return (
    <div className={cn(
      "min-h-screen w-full bg-space text-white pb-20",
      isActionMode() ? 'action-mode' : 'growth-mode'
    )}>
      <div className="max-w-screen-sm mx-auto relative">
        <Header />
        
        <main className="px-4 py-6">
          <section className="mb-8">
            <h2 className={cn(
              "text-2xl font-bold mb-6",
              isActionMode() ? 'text-rickblue' : 'text-portalgreen'
            )}>
              {isActionMode() 
                ? "Let's Get Schwifty!" 
                : "Oh Geez, Let's Grow!"}
            </h2>
            
            <StatsCard stats={userStats} />
            
            <Tabs defaultValue="today" className="w-full">
              <TabsList className="grid grid-cols-2 mb-6">
                <TabsTrigger value="today" className={cn(
                  isActionMode() ? 'data-[state=active]:bg-rickblue/20' : 'data-[state=active]:bg-portalgreen/20',
                  isActionMode() ? 'data-[state=active]:text-rickblue' : 'data-[state=active]:text-portalgreen'
                )}>
                  Today
                </TabsTrigger>
                <TabsTrigger value="recommendations" className={cn(
                  isActionMode() ? 'data-[state=active]:bg-rickblue/20' : 'data-[state=active]:bg-portalgreen/20',
                  isActionMode() ? 'data-[state=active]:text-rickblue' : 'data-[state=active]:text-portalgreen'
                )}>
                  Recommendations
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="today" className="animate-fade-in">
                <div className="mb-4">
                  {userHabits.map(habit => (
                    <HabitItem 
                      key={habit.id} 
                      habit={habit} 
                      onToggleStatus={toggleHabitStatus} 
                    />
                  ))}
                </div>
                
                <button className={cn(
                  "w-full py-3 px-4 rounded-lg border-2 border-dashed",
                  isActionMode() 
                    ? 'border-rickblue/30 hover:border-rickblue/50 text-rickblue' 
                    : 'border-portalgreen/30 hover:border-portalgreen/50 text-portalgreen',
                  "transition-colors"
                )}>
                  Add New Habit
                </button>
              </TabsContent>
              
              <TabsContent value="recommendations" className="animate-fade-in">
                <div className="mb-4">
                  {recommendations.map(habit => (
                    <RecommendationCard 
                      key={habit.id} 
                      habit={habit}
                      onAdd={addHabit} 
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </section>
        </main>
        
        <ModeToggle />
        <TabNavigation />
      </div>
    </div>
  );
};

export default Index;
