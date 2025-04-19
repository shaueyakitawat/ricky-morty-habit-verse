
export type HabitStatus = 'complete' | 'incomplete';

export interface Habit {
  id: string;
  title: string;
  description: string;
  icon: string;
  status: HabitStatus;
  streak: number;
  category: string;
}

export interface Award {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress: number;
  maxProgress: number;
}

export interface UserStats {
  streakDays: number;
  completedHabits: number;
  totalHabits: number;
  awardsUnlocked: number;
  totalAwards: number;
}

export type ToastVariant = 'default' | 'destructive' | 'success';
