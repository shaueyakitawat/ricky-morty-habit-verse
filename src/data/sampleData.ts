
import { Award, Habit, UserStats } from "@/types/habit";

export const habits: Habit[] = [
  {
    id: "1",
    title: "Morning meditation",
    description: "Start your day with 10 minutes of meditation",
    icon: "brain",
    status: "complete",
    streak: 5,
    category: "wellness",
  },
  {
    id: "2",
    title: "Read for 30 minutes",
    description: "Read something educational or inspiring",
    icon: "book-open",
    status: "incomplete",
    streak: 3,
    category: "learning",
  },
  {
    id: "3",
    title: "Work out",
    description: "30 minutes of exercise",
    icon: "dumbbell",
    status: "incomplete",
    streak: 0,
    category: "fitness",
  },
  {
    id: "4",
    title: "Drink 8 glasses of water",
    description: "Stay hydrated throughout the day",
    icon: "droplet",
    status: "complete",
    streak: 7,
    category: "wellness",
  },
  {
    id: "5",
    title: "Code practice",
    description: "Solve one coding problem",
    icon: "code",
    status: "incomplete",
    streak: 2,
    category: "learning",
  },
];

export const awards: Award[] = [
  {
    id: "1",
    name: "Portal Jumper",
    description: "Complete 5 habits in a row",
    icon: "award",
    unlocked: true,
    progress: 5,
    maxProgress: 5,
  },
  {
    id: "2",
    name: "Pickle Rick",
    description: "Maintain a streak for 10 days",
    icon: "zap",
    unlocked: false,
    progress: 7,
    maxProgress: 10,
  },
  {
    id: "3",
    name: "Get Schwifty",
    description: "Complete all daily habits for a week",
    icon: "star",
    unlocked: false,
    progress: 3,
    maxProgress: 7,
  },
  {
    id: "4",
    name: "Interdimensional",
    description: "Try habits from 5 different categories",
    icon: "award",
    unlocked: false,
    progress: 3,
    maxProgress: 5,
  },
];

export const userStats: UserStats = {
  streakDays: 7,
  completedHabits: 42,
  totalHabits: 68,
  awardsUnlocked: 1,
  totalAwards: 10,
};

export const recommendedHabits: Habit[] = [
  {
    id: "r1",
    title: "Mindfulness break",
    description: "Take 5 minutes to practice mindfulness",
    icon: "brain",
    status: "incomplete",
    streak: 0,
    category: "wellness",
  },
  {
    id: "r2",
    title: "Gratitude journal",
    description: "Write down 3 things you're grateful for",
    icon: "book",
    status: "incomplete",
    streak: 0,
    category: "wellness",
  },
  {
    id: "r3",
    title: "No-phone hour",
    description: "Spend an hour without looking at your phone",
    icon: "smartphone-off",
    status: "incomplete",
    streak: 0,
    category: "digital-wellbeing",
  },
];
