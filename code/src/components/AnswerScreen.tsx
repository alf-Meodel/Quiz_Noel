import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

interface AnswerScreenProps {
  isCorrect: boolean;
  correctAnswer: string;
  explanation?: string;
  onNext: () => void;
  nextPlayer: number;
}

export const AnswerScreen: React.FC<AnswerScreenProps> = ({
  isCorrect,
  correctAnswer,
  explanation,
  onNext,
  nextPlayer,
}) => {
  return (
    <div className="bg-white/95 rounded-xl p-8 backdrop-blur-sm text-center">
      <div className="flex justify-center mb-6">
        {isCorrect ? (
          <CheckCircle className="w-16 h-16 text-green-500" />
        ) : (
          <XCircle className="w-16 h-16 text-red-500" />
        )}
      </div>

      <h3 className="text-2xl font-bold mb-4">
        {isCorrect ? (
          <span className="text-green-600">Bonne réponse !</span>
        ) : (
          <span className="text-red-600">Pas tout à fait...</span>
        )}
      </h3>

      <p className="text-lg text-teal-800 mb-4">
        La bonne réponse était : <strong>{correctAnswer}</strong>
      </p>

      {explanation && <p className="text-teal-600 mb-6">{explanation}</p>}

      <div className="mt-8">
        <p className="text-teal-700 mb-4">Au tour du Joueur {nextPlayer} !</p>
        <button
          onClick={onNext}
          className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 
                   transition-colors duration-200 font-medium"
        >
          Continuer
        </button>
      </div>
    </div>
  );
};
