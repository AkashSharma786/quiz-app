import { useState } from 'react'
import { Link } from "react-router";
import './QuizIntro.css'

function QuizIntro() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState('')
  const [numberOfQuestions, setNumberOfQuestions] = useState(10)

  const categories = [
    { id: '', name: 'Any Category' },
    { id: '9', name: 'General Knowledge' },
    { id: '17', name: 'Science & Nature' },
    { id: '18', name: 'Science: Computers' },
    { id: '21', name: 'Sports' },
    { id: '22', name: 'Geography' },
    { id: '23', name: 'History' }
  ]

  const difficulties = [
    { value: '', label: 'Any Difficulty' },
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' }
  ]

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

     

   


        
          <Link 
            to="/quiz" 
            state={{ 
              category: selectedCategory, 
              difficulty: selectedDifficulty, 
              amount: numberOfQuestions 
            }}
          >
            <button className="start-quiz-btn">
               Start Quiz
            </button>
          </Link>
          
         
        </div>
    
   
  )
}

export default QuizIntro
