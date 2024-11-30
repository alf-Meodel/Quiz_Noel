import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';

export const Join: React.FC = () => {
  const [name, setName] = useState('');
  const { gameId } = useParams<{ gameId: string }>();
  const navigate = useNavigate();
  const { players, addPlayer } = useGameStore();

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && players.length < 2) {
      addPlayer(name.trim());
      navigate(`/game/${gameId}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <form onSubmit={handleJoin} className="w-full max-w-md p-8 bg-white/90 rounded-xl shadow-lg backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-teal-800 mb-6">Rejoindre la partie</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-teal-700 mb-2">
              Votre nom
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:ring-2 
                       focus:ring-teal-500 focus:border-transparent"
              placeholder="Entrez votre nom"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-teal-600 text-white rounded-lg hover:bg-teal-700 
                     transition-colors duration-200 font-medium"
          >
            Rejoindre
          </button>
        </div>
      </form>
    </div>
  );
};