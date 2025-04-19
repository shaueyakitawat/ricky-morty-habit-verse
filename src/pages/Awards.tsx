
import React from 'react';
import { useAppMode } from '@/contexts/AppModeContext';
import { cn } from '@/lib/utils';
import { awards } from '@/data/sampleData';
import Header from '@/components/Header';
import ModeToggle from '@/components/ModeToggle';
import TabNavigation from '@/components/TabNavigation';
import AwardItem from '@/components/AwardItem';
import { Trophy } from 'lucide-react';

const Awards = () => {
  const { mode, isActionMode } = useAppMode();
  const unlockedAwards = awards.filter(award => award.unlocked);
  const lockedAwards = awards.filter(award => !award.unlocked);
  
  return (
    <div className={cn(
      "min-h-screen w-full bg-space text-white pb-20",
      isActionMode() ? 'action-mode' : 'growth-mode'
    )}>
      <div className="max-w-screen-sm mx-auto relative">
        <Header />
        
        <main className="px-4 py-6">
          <section className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className={cn(
                "text-2xl font-bold",
                isActionMode() ? 'text-rickblue' : 'text-portalgreen'
              )}>
                Awards & Achievements
              </h2>
              <div className={cn(
                "h-10 w-10 rounded-full flex items-center justify-center",
                isActionMode() 
                  ? 'bg-rickblue/20 text-rickblue' 
                  : 'bg-portalgreen/20 text-portalgreen'
              )}>
                <Trophy size={20} />
              </div>
            </div>
            
            {unlockedAwards.length > 0 && (
              <>
                <h3 className="text-lg font-medium mb-3 text-white">Unlocked</h3>
                <div className="mb-6">
                  {unlockedAwards.map(award => (
                    <AwardItem key={award.id} award={award} />
                  ))}
                </div>
              </>
            )}
            
            <h3 className="text-lg font-medium mb-3 text-white">In Progress</h3>
            <div className="mb-4">
              {lockedAwards.map(award => (
                <AwardItem key={award.id} award={award} />
              ))}
            </div>
          </section>
        </main>
        
        <ModeToggle />
        <TabNavigation />
      </div>
    </div>
  );
};

export default Awards;
