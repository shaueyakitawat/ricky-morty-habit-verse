
import React from 'react';
import { 
  Award, 
  Brain,
  Book, 
  BookOpen, 
  Code, 
  Dumbbell, 
  Droplet,
  LucideIcon,
  LucideProps,
  Smartphone,
  Star,
  Trophy,
  Zap
} from 'lucide-react';

interface DynamicIconProps extends LucideProps {
  name: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  const iconMap: Record<string, LucideIcon> = {
    award: Award,
    brain: Brain,
    book: Book,
    'book-open': BookOpen,
    code: Code,
    dumbbell: Dumbbell,
    droplet: Droplet,
    'smartphone-off': Smartphone,
    star: Star,
    trophy: Trophy,
    zap: Zap
  };
  
  const IconComponent = iconMap[name] || Award;
  
  return <IconComponent {...props} />;
};
