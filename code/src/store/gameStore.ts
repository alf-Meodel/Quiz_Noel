import { create } from 'zustand';
import { GameState, Player } from '../types/quiz';
import { questions } from '../data/questions';

interface GameStore extends GameState {
  addPlayer: (name: string) => void;
  updateScore: (playerId: string, score: number) => void;
  nextQuestion: () => void;
  startGame: () => void;
  finishGame: () => void;
  resetGame: () => void;
}

export const useGameStore = create<GameStore>((set) => ({
  players: [],
  currentQuestion: 0,
  isGameStarted: false,
  isGameFinished: false,

  addPlayer: (name) => set((state) => ({
    players: [...state.players, { id: crypto.randomUUID(), name, score: 0 }]
  })),

  updateScore: (playerId, score) => set((state) => ({
    players: state.players.map(player =>
      player.id === playerId ? { ...player, score: player.score + score } : player
    )
  })),

  nextQuestion: () => set((state) => ({
    currentQuestion: state.currentQuestion + 1,
    isGameFinished: state.currentQuestion + 1 >= questions.length
  })),

  startGame: () => set({ isGameStarted: true }),
  finishGame: () => set({ isGameFinished: true }),
  resetGame: () => set({
    players: [],
    currentQuestion: 0,
    isGameStarted: false,
    isGameFinished: false
  })
}));