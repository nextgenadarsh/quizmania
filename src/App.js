import React from "react";
import QuizGame from "./pages/quiz-game";

import "./style.css";

export default function App() {
  return (
    <div>
      <h1 className="app-header">Quiz Mania!</h1>
      <QuizGame />
    </div>
  );
}
