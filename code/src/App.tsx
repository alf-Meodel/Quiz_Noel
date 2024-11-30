import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { DayQuiz } from './pages/DayQuiz';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-teal-500 to-blue-600 
                    bg-fixed overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:day" element={<DayQuiz />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;