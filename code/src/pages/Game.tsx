import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';
import { QRCodeJoin } from '../components/QRCodeJoin';
import { Question } from '../components/Question';
import { GameOver } from '../components/GameOver';
import { questions } from '../data/questions';

export const Game: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const {
    players,
    currentQuestion,
    isGameStarted,
    isGameFinished,
    startGame,
    updateScore,
    nextQuestion,
    resetGame
  } = useGameStore();

  const handleAnswer = (answerIndex: number) => {
    const currentPlayer = players[currentQuestion % 2];
    const isCorrect = answerIndex === questions[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      updateScore(currentPlayer.id, 10);
    }
    
    nextQuestion();
  };

  useEffect(() => {
    if (players.length === 2 && !isGameStarted) {
      startGame();
    }
  }, [players, isGameStarted, startGame]);

  if (!isGameStarted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8">
        <h1 className="text-3xl font-bold text-white">En attente des joueurs...</h1>
        <QRCodeJoin gameId={gameId!} />
        <p className="text-white text-lg">
          {players.length}/2 joueurs connectés
        </p>
      </div>
    );
  }

  if (isGameFinished) {
    return <GameOver players={players} onRestart={resetGame} />;
  }

  const currentPlayer = players[currentQuestion % 2];

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8">
      <div className="w-full max-w-2xl">
        <div className="flex justify-between mb-8">
          {players.map((player) => (
            <div key={player.id} className="text-white">
              <span className="font-medium">{player.name}</span>: {player.score} points
            </div>
          ))}
        </div>
        
        <Question
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          playerName={currentPlayer.name}
        />
      </div>
    </div>
  );
};