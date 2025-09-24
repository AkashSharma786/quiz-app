import { useState } from 'react'
import './QuizIntro.css'
import { useSelector, useDispatch } from 'react-redux';
import { setQuestions} from '../app/quizSlice.js';
import fetchQuestions from '../app/fetchQuestions.js';
import { useNavigate }  from 'react-router';
function QuizIntro() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleStartQuiz = () => {
    const category = 9; // General Knowledge
    const difficulty = "easy";
    const amount = 10; // Number of questions
    
    fetchQuestions(category, difficulty, amount)
      .then(questions => {
       
        dispatch(setQuestions(questions));
        navigate("/quiz");
    
      })
      .catch(error => {
        
        alert("Error fetching questions.");
      });
    
  }
  return (
    <div className="quiz-intro-container">
      <div className="quiz-intro-header">
        <h1>Quiz Challenge</h1>
        <p className="quiz-subtitle">Test your knowledge and challenge yourself!</p>
      </div>

      <div className="quiz-instructions">
        <h2>📋 How to Play</h2>
        <div className="instructions-grid">
          <div className="instruction-item">
            <div className="instruction-icon">⏱️</div>
            <h3>Time Limit</h3>
            <p>Test duration is 10 minutes. Test will be auto-submit when time runs out. Answer quickly but carefully!</p>
          </div>
          

          
          <div className="instruction-item">
            <div className="instruction-icon">🏆</div>
            <h3>Final Score</h3>
            <p>Your final score will be displayed at the end with performance insights.</p>
          </div>
        </div>
      </div>

      <div className="quiz-rules">
        <h2>📜 Quiz Rules</h2>
        <ul className="rules-list">
          <li>✅ Read each question carefully before answering</li>
          <li>✅ Multiple choice question select correct answers</li>
          <li>✅ Questions are presented in random order</li>
          <li>❌ No external help or resources allowed</li>
          <li>❌ Cannot skip questions - all must be answered</li>
          
        </ul>
      </div>

        <button className="start-quiz-btn"
            onClick={handleStartQuiz}>
              Start Quiz
        </button>
    
      </div>
    
   
  )
}

export default QuizIntro
