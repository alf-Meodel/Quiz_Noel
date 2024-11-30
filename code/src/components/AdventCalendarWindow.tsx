import React from 'react';
import { Gift } from 'lucide-react';

interface AdventCalendarWindowProps {
  day: number;
  isOpen: boolean;
  onClick: () => void;
}

export const AdventCalendarWindow: React.FC<AdventCalendarWindowProps> = ({
  day,
  isOpen,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative w-full aspect-square rounded-lg ${
        isOpen
          ? 'bg-teal-100 cursor-default'
          : 'bg-white hover:bg-teal-50 cursor-pointer'
      } shadow-lg transition-all duration-300 flex items-center justify-center`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-teal-800">{day}</span>
      </div>
      {!isOpen && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Gift className="w-8 h-8 text-teal-600" />
        </div>
      )}
    </button>
  );
};