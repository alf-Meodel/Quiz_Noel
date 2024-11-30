import React from 'react';
import { Player } from '../types/quiz';
import { Trophy } from 'lucide-react';

interface GameOverProps {
  players: Player[];
  onRestart: () => void;
}

export const GameOver: React.FC<GameOverProps> = ({ players, onRestart }) => {
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
  const winner = sortedPlayers[0];
  const isDraw = sortedPlayers[0].score === sortedPlayers[1].score;

  return (
    <div className="w-full max-w-md p-8 bg-white/90 rounded-xl shadow-lg backdrop-blur-sm text-center">
      <Trophy className="w-16 h-16 text-teal-600 mx-auto mb-6" />
      
      {isDraw ? (
        <h2 className="text-2xl font-bold text-teal-800 mb-6">Match nul !</h2>
      ) : (
        <h2 className="text-2xl font-bold text-teal-800 mb-6">
          {winner.name} remporte la partie !
        </h2>
      )}

      <div className="space-y-4 mb-8">
        {sortedPlayers.map((player) => (
          <div key={player.id} className="flex justify-between items-center p-3 bg-teal-50 rounded-lg">
            <span className="font-medium text-teal-700">{player.name}</span>
            <span className="text-teal-600">{player.score} points</span>
          </div>
        ))}
      </div>

      <button
        onClick={onRestart}
        className="w-full py-3 px-6 bg-teal-600 text-white rounded-lg hover:bg-teal-700 
                 transition-colors duration-200 font-medium"
      >
        Nouvelle partie
      </button>
    </div>
  );
};