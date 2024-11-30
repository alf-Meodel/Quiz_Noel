import React from 'react';
import { User } from 'lucide-react';

interface PlayerButtonProps {
  playerNumber: number;
  onClick: () => void;
  disabled: boolean;
}

export const PlayerButton: React.FC<PlayerButtonProps> = ({
  playerNumber,
  onClick,
  disabled
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full h-32 ${
        playerNumber === 1 ? 'bg-teal-500' : 'bg-blue-500'
      } rounded-xl shadow-lg flex flex-col items-center justify-center space-y-2
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
    >
      <User className="w-12 h-12 text-white" />
      <span className="text-white font-bold text-xl">
        Joueur {playerNumber}
      </span>
    </button>
  );
};