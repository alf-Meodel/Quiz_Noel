export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Player {
  id: string;
  name: string;
  score: number;
}

export interface GameState {
  players: Player[];
  currentQuestion: number;
  isGameStarted: boolean;
  isGameFinished: boolean;
}

export interface DayEntry {
  keyword: string;
  password: string;
  questions: Question[];
}