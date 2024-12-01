import React, { useEffect, useState } from "react";

interface PlayerTurnProps {
  playerNumber: number;
  questionNumber: number;
  totalQuestions: number;
}

export const PlayerTurn: React.FC<PlayerTurnProps> = ({
  playerNumber,
  questionNumber,
  totalQuestions,
}) => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    setShowAnimation(true);
    const timer = setTimeout(() => setShowAnimation(false), 1000);
    return () => clearTimeout(timer);
  }, [playerNumber]);

  const playerColor = playerNumber === 1 ? "from-[#A1668A]" : "from-[#54B1AA]";
  const playerSecondaryColor =
    playerNumber === 1 ? "to-[#A1668A]/70" : "to-[#54B1AA]/70";

  return (
    <div className="relative">
      {showAnimation && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`animate-scale-fade-out absolute w-64 h-64 bg-gradient-to-br ${playerColor} ${playerSecondaryColor} rounded-full opacity-20`}
          />
        </div>
      )}
      <div className="text-center relative z-10">
        <h2
          className={`text-3xl font-bold mb-2 ${showAnimation ? "animate-bounce" : ""} 
          ${playerNumber === 1 ? "text-[#A1668A]" : "text-[#54B1AA]"}`}
        >
          Tour du Joueur {playerNumber}
        </h2>
        <p className="text-sm text-teal-600">
          Question {questionNumber}/{totalQuestions}
        </p>
      </div>
    </div>
  );
};
