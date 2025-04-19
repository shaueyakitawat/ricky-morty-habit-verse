
import React from 'react';
import { useAppMode } from '@/contexts/AppModeContext';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import ModeToggle from '@/components/ModeToggle';
import TabNavigation from '@/components/TabNavigation';
import { User, Settings, Camera, Bell, Moon, LogOut } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const Profile = () => {
  const { mode, isActionMode, toggleMode } = useAppMode();
  
  return (
    <div className={cn(
      "min-h-screen w-full bg-space text-white pb-20",
      isActionMode() ? 'action-mode' : 'growth-mode'
    )}>
      <div className="max-w-screen-sm mx-auto relative">
        <Header />
        
        <main className="px-4 py-6">
          <section className="mb-8 text-center">
            <div className="relative inline-block mb-4">
              <div className={cn(
                "h-24 w-24 rounded-full overflow-hidden border-4",
                isActionMode() ? 'border-rickblue' : 'border-portalgreen'
              )}>
                <div className="h-full w-full bg-gray-800 flex items-center justify-center">
                  <User size={40} className="text-gray-400" />
                </div>
              </div>
              <button className={cn(
                "absolute bottom-0 right-0 h-8 w-8 rounded-full flex items-center justify-center",
                isActionMode() ? 'bg-rickblue' : 'bg-portalgreen'
              )}>
                <Camera size={16} className="text-white" />
              </button>
            </div>
            <h2 className="text-2xl font-bold text-white mb-1">User Profile</h2>
            <p className="text-gray-400">Complete your profile to unlock more features</p>
          </section>
          
          <section className="mb-8">
            <h3 className={cn(
              "text-lg font-medium mb-4",
              isActionMode() ? 'text-rickblue' : 'text-portalgreen'
            )}>
              Preferences
            </h3>
            
            <div className={cn(
              "p-4 rounded-xl mb-4",
              isActionMode() ? 'rick-card' : 'morty-card'
            )}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Moon size={20} className="mr-3 text-gray-400" />
                  <div>
                    <Label htmlFor="action-mode" className="text-white">
                      Action Mode
                    </Label>
                    <p className="text-xs text-gray-400">
                      Toggle between Action and Growth modes
                    </p>
                  </div>
                </div>
                <Switch 
                  id="action-mode" 
                  checked={isActionMode()}
                  onCheckedChange={toggleMode}
                  className={isActionMode() 
                    ? 'bg-rickblue' 
                    : 'bg-portalgreen'
                  }
                />
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Bell size={20} className="mr-3 text-gray-400" />
                  <div>
                    <Label htmlFor="notifications" className="text-white">
                      Notifications
                    </Label>
                    <p className="text-xs text-gray-400">
                      Receive habit reminders
                    </p>
                  </div>
                </div>
                <Switch 
                  id="notifications" 
                  defaultChecked
                  className={isActionMode() 
                    ? 'bg-rickblue' 
                    : 'bg-portalgreen'
                  }
                />
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h3 className={cn(
              "text-lg font-medium mb-4",
              isActionMode() ? 'text-rickblue' : 'text-portalgreen'
            )}>
              Account
            </h3>
            
            <div className={cn(
              "rounded-xl overflow-hidden divide-y divide-gray-800",
              isActionMode() ? 'rick-card' : 'morty-card'
            )}>
              <button className="w-full flex items-center p-4 text-white hover:bg-gray-800/50 transition-colors">
                <Settings size={18} className="mr-3 text-gray-400" />
                <span>Account Settings</span>
              </button>
              <button className="w-full flex items-center p-4 text-red-500 hover:bg-gray-800/50 transition-colors">
                <LogOut size={18} className="mr-3" />
                <span>Log Out</span>
              </button>
            </div>
          </section>
        </main>
        
        <ModeToggle />
        <TabNavigation />
      </div>
    </div>
  );
};

export default Profile;
