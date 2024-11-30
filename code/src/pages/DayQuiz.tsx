import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getQuestionsForDay } from "../data/questions";
import { AnswerScreen } from "../components/AnswerScreen";
import Snowfall from "react-snowfall";

export const DayQuiz: React.FC = () => {
  const { day } = useParams<{ day: string }>();
  const navigate = useNavigate();
  const dayNumber = parseInt(day || "1", 10);
  const questions = getQuestionsForDay(dayNumber);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ player1: 0, player2: 0 });
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(false);

  const isGameOver = currentQuestion >= questions.length * 2;

  const handleAnswer = (selectedIndex: number) => {
    const currentQuestionData = questions[currentQuestion % questions.length];
    const isCorrect = selectedIndex === currentQuestionData.correctAnswer;

    if (isCorrect) {
      setScores((prev) => ({
        ...prev,
        [`player${currentPlayer}`]:
          prev[`player${currentPlayer}` as keyof typeof prev] + 10,
      }));
    }

    setLastAnswerCorrect(isCorrect);
    setShowAnswer(true);
  };

  const handleNext = () => {
    if (currentQuestion >= questions.length * 2 - 1) {
      // Fin du jeu
      return;
    }

    setShowAnswer(false);
    setCurrentQuestion((prev) => prev + 1);
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  const currentQuestionData = questions[currentQuestion % questions.length];

  return (
    <div className="min-h-screen relative">
      <Snowfall snowflakeCount={200} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Quiz de Noël - Jour {dayNumber}
        </h1>

        <div className="bg-white/90 rounded-xl p-8 backdrop-blur-sm max-w-3xl mx-auto">
          <div className="flex justify-between mb-6">
            <span
              className={`text-xl font-bold ${currentPlayer === 1 ? "text-teal-600" : "text-teal-800"}`}
            >
              Joueur 1: {scores.player1} points
            </span>
            <span
              className={`text-xl font-bold ${currentPlayer === 2 ? "text-teal-600" : "text-teal-800"}`}
            >
              Joueur 2: {scores.player2} points
            </span>
          </div>

          {!isGameOver ? (
            showAnswer ? (
              // Afficher la bonne réponse
              <AnswerScreen
                isCorrect={lastAnswerCorrect}
                correctAnswer={
                  questions[currentQuestion % questions.length].options[
                    questions[currentQuestion % questions.length].correctAnswer
                  ]
                }
                onNext={handleNext}
                nextPlayer={currentPlayer === 1 ? 2 : 1}
              />
            ) : (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <span className="text-lg font-medium text-teal-700">
                    Tour du Joueur {currentPlayer}
                  </span>
                  <p className="text-sm text-teal-600">
                    Question {Math.floor(currentQuestion / 2) + 1}/
                    {questions.length}
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-teal-800 mb-6">
                  {currentQuestionData.question}
                </h2>

                <div className="grid grid-cols-1 gap-4">
                  {currentQuestionData.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className="p-4 text-left rounded-lg border-2 border-teal-200 hover:border-teal-400 
                               hover:bg-teal-50 transition-colors duration-200 text-teal-700"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-teal-800 mb-4">
                Quiz terminé !
              </h2>
              <div className="space-y-4 mb-6">
                <p className="text-xl text-teal-700">Score final :</p>
                <p className="text-lg text-teal-600">
                  Joueur 1 : {scores.player1} points
                </p>
                <p className="text-lg text-teal-600">
                  Joueur 2 : {scores.player2} points
                </p>
                <p className="text-xl font-bold text-teal-800 mt-4">
                  {scores.player1 > scores.player2
                    ? "Joueur 1 gagne !"
                    : scores.player2 > scores.player1
                      ? "Joueur 2 gagne !"
                      : "Match nul !"}
                </p>
              </div>
              <button
                onClick={() => navigate("/")}
                className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 
                         transition-colors duration-200"
              >
                Retour à l'accueil
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
