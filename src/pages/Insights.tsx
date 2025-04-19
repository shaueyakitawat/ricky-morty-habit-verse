
import React from 'react';
import { useAppMode } from '@/contexts/AppModeContext';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import ModeToggle from '@/components/ModeToggle';
import TabNavigation from '@/components/TabNavigation';
import { BarChart } from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const Insights = () => {
  const { isActionMode } = useAppMode();
  
  // Sample data for charts
  const weeklyData = [
    { name: 'Mon', complete: 4, incomplete: 1 },
    { name: 'Tue', complete: 3, incomplete: 2 },
    { name: 'Wed', complete: 5, incomplete: 0 },
    { name: 'Thu', complete: 2, incomplete: 3 },
    { name: 'Fri', complete: 4, incomplete: 1 },
    { name: 'Sat', complete: 3, incomplete: 2 },
    { name: 'Sun', complete: 4, incomplete: 1 }
  ];
  
  const monthlyData = [
    { name: 'Week 1', habits: 22 },
    { name: 'Week 2', habits: 18 },
    { name: 'Week 3', habits: 25 },
    { name: 'Week 4', habits: 27 }
  ];
  
  return (
    <div className={cn(
      "min-h-screen w-full bg-space text-white pb-20",
      isActionMode() ? 'action-mode' : 'growth-mode'
    )}>
      <div className="max-w-screen-sm mx-auto relative">
        <Header />
        
        <main className="px-4 py-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className={cn(
              "text-2xl font-bold",
              isActionMode() ? 'text-rickblue' : 'text-portalgreen'
            )}>
              Progress Insights
            </h2>
            <div className={cn(
              "h-10 w-10 rounded-full flex items-center justify-center",
              isActionMode() 
                ? 'bg-rickblue/20 text-rickblue' 
                : 'bg-portalgreen/20 text-portalgreen'
            )}>
              <BarChart size={20} />
            </div>
          </div>
          
          <section className={cn(
            "mb-8 p-4 rounded-xl",
            isActionMode() ? 'rick-card' : 'morty-card'
          )}>
            <h3 className="text-lg font-medium mb-4">This Week's Habits</h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={weeklyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: '#aaa' }} />
                  <YAxis tick={{ fill: '#aaa' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#121212', 
                      border: '1px solid #333',
                      borderRadius: '8px'
                    }} 
                    itemStyle={{ color: '#fff' }}
                    labelStyle={{ color: '#aaa' }}
                  />
                  <Bar 
                    dataKey="complete" 
                    stackId="a" 
                    name="Completed" 
                    fill={isActionMode() ? "#24C1E0" : "#97CE4C"} 
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar 
                    dataKey="incomplete" 
                    stackId="a" 
                    name="Incomplete" 
                    fill="#444" 
                    radius={[4, 4, 0, 0]}
                  />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </section>
          
          <section className={cn(
            "mb-8 p-4 rounded-xl",
            isActionMode() ? 'rick-card' : 'morty-card'
          )}>
            <h3 className="text-lg font-medium mb-4">Monthly Trend</h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorHabits" x1="0" y1="0" x2="0" y2="1">
                      <stop 
                        offset="5%" 
                        stopColor={isActionMode() ? "#24C1E0" : "#97CE4C"} 
                        stopOpacity={0.8}
                      />
                      <stop 
                        offset="95%" 
                        stopColor={isActionMode() ? "#24C1E0" : "#97CE4C"} 
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: '#aaa' }} />
                  <YAxis tick={{ fill: '#aaa' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#121212', 
                      border: '1px solid #333',
                      borderRadius: '8px'
                    }} 
                    itemStyle={{ color: '#fff' }}
                    labelStyle={{ color: '#aaa' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="habits" 
                    name="Habits Completed" 
                    stroke={isActionMode() ? "#24C1E0" : "#97CE4C"} 
                    fillOpacity={1} 
                    fill="url(#colorHabits)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </section>
        </main>
        
        <ModeToggle />
        <TabNavigation />
      </div>
    </div>
  );
};

export default Insights;
