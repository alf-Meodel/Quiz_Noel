import React from "react";
import { Question as QuestionType } from "../types/quiz";

interface QuestionProps {
  question: QuestionType;
  onAnswer: (answerIndex: number) => void;
  playerName: string;
}

export const Question: React.FC<QuestionProps> = ({
  question,
  onAnswer,
  playerName,
}) => {
  return (
    <div className="w-full max-w-2xl p-6 bg-white/90 rounded-xl shadow-lg backdrop-blur-sm">
      <div className="mb-6">
        <p className="text-teal-600 text-lg font-medium">
          C'est au tour de {playerName}
        </p>
        <h3 className="text-2xl font-bold text-teal-800 mt-2">
          {question.question}
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className="p-4 text-left rounded-lg border-2 border-teal-200 hover:border-teal-400 
                     hover:bg-teal-50 transition-colors duration-200 text-teal-700"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
