import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Snowflake } from "lucide-react";
import { validateAccess } from "../data/quizAccess";
import Snowfall from "react-snowfall";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const day = validateAccess(code, password);
    if (day !== null) {
      navigate(`/quiz/${day}`);
    } else {
      setError("Code ou mot de passe incorrect");
      setCode("");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      <Snowfall snowflakeCount={200} />
      <div className="w-full max-w-md p-8 bg-white/90 rounded-xl shadow-lg backdrop-blur-sm">
        <div className="flex flex-col items-center mb-8">
          <Snowflake className="w-16 h-16 text-teal-600 mb-4" />
          <h1 className="text-3xl font-bold text-teal-800 text-center">
            Quiz de Noël
          </h1>
          <p className="text-teal-600 mt-2 text-center">
            Entrez votre code et mot de passe pour accéder au quiz du jour
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="code"
              className="block text-sm font-medium text-teal-700 mb-2"
            >
              Code d'accès
            </label>
            <input
              type="text"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:ring-2 
                     focus:ring-teal-500 focus:border-transparent"
              placeholder="Exemple: test"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-teal-700 mb-2"
            >
              Mot de passe
            </label>
            <input
              // type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:ring-2 
                     focus:ring-teal-500 focus:border-transparent"
              placeholder="Exemple: test"
              required
            />
          </div>

          {error && (
            <div className="p-3 bg-red-100 border border-red-300 rounded-lg">
              <p className="text-red-700 text-sm text-center">{error}</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 px-6 bg-teal-600 text-white rounded-lg hover:bg-teal-700 
                   transition-colors duration-200 font-medium"
          >
            Accéder au quiz
          </button>
        </form>

        <div className="mt-4 text-sm text-teal-600 text-center">
          <p>Pour tester : code="test", mot de passe="test"</p>
        </div>
      </div>
    </div>
  );
};
