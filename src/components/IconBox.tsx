import React from 'react';

interface IconBoxProps {
  icon: React.ReactNode;
  color: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'orange' | 'teal';
  className?: string;
}

const IconBox: React.FC<IconBoxProps> = ({ icon, color, className = '' }) => {
  const colorMap = {
    red: {
      bg: 'bg-red-50/80',
      icon: 'text-red-400',
      glow: 'before:bg-red-100/50',
      shadow: 'shadow-red-100/50',
    },
    yellow: {
      bg: 'bg-amber-50/80',
      icon: 'text-amber-400',
      glow: 'before:bg-amber-100/50',
      shadow: 'shadow-amber-100/50',
    },
    green: {
      bg: 'bg-emerald-50/80',
      icon: 'text-emerald-400',
      glow: 'before:bg-emerald-100/50',
      shadow: 'shadow-emerald-100/50',
    },
    blue: {
      bg: 'bg-blue-50/80',
      icon: 'text-blue-400',
      glow: 'before:bg-blue-100/50',
      shadow: 'shadow-blue-100/50',
    },
    purple: {
      bg: 'bg-purple-50/80',
      icon: 'text-purple-400',
      glow: 'before:bg-purple-100/50',
      shadow: 'shadow-purple-100/50',
    },
    pink: {
      bg: 'bg-pink-50/80',
      icon: 'text-pink-400',
      glow: 'before:bg-pink-100/50',
      shadow: 'shadow-pink-100/50',
    },
    orange: {
      bg: 'bg-orange-50/80',
      icon: 'text-orange-400',
      glow: 'before:bg-orange-100/50',
      shadow: 'shadow-orange-100/50',
    },
    teal: {
      bg: 'bg-teal-50/80',
      icon: 'text-teal-400',
      glow: 'before:bg-teal-100/50',
      shadow: 'shadow-teal-100/50',
    },
  };

  return (
    <div className={`relative ${className}`}>
      <div 
        className={`
          relative w-16 h-16 rounded-2xl ${colorMap[color].bg} 
          flex items-center justify-center 
          transform transition-all duration-300 ease-in-out
          hover:scale-110 group cursor-pointer
          before:absolute before:inset-0 
          before:rounded-2xl ${colorMap[color].glow}
          before:blur-xl before:opacity-0
          hover:before:opacity-100
          before:transition-all before:duration-300
          after:absolute after:inset-0
          after:rounded-2xl after:border-2 after:border-transparent
          hover:after:border-current after:transition-colors after:duration-300
          ${colorMap[color].shadow} hover:shadow-lg
          overflow-visible
        `}
      >
        <div className={`
          relative w-8 h-8 ${colorMap[color].icon} 
          transform transition-all duration-300 ease-in-out
          group-hover:scale-110 group-hover:rotate-12
        `}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default IconBox; 