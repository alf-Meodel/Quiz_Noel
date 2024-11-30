import React, { useState } from 'react';
import { Snowflake } from 'lucide-react';

interface LoginFormProps {
  day: number;
  onLogin: (keyword: string, password: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ day, onLogin }) => {
  const [keyword, setKeyword] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(keyword.toLowerCase(), password.toLowerCase());
  };

  return (
    <div className="w-full max-w-md p-8 bg-white/90 rounded-xl shadow-lg backdrop-blur-sm">
      <div className="flex items-center justify-center mb-6">
        <Snowflake className="w-12 h-12 text-teal-600" />
      </div>
      <h2 className="text-2xl font-bold text-teal-800 text-center mb-6">
        Jour {day}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="keyword" className="block text-sm font-medium text-teal-700 mb-2">
            Mot-clé du jour
          </label>
          <input
            type="text"
            id="keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:ring-2 
                     focus:ring-teal-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-teal-700 mb-2">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:ring-2 
                     focus:ring-teal-500 focus:border-transparent"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-6 bg-teal-600 text-white rounded-lg hover:bg-teal-700 
                   transition-colors duration-200 font-medium"
        >
          Ouvrir la fenêtre
        </button>
      </form>
    </div>
  );
};