import './App.scss';
import QuizGame from './modules/quiz-game';

function App() {
  return (
    <div className="quiz-mania">
      <header className="header">
        Quiz Mania
      </header>
      <div className="content">
        <QuizGame />
      </div>
    </div>
  );
}

export default App;
