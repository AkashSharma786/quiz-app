import { useState } from 'react'
import { Link } from "react-router";
import './QuizIntro.css'

function QuizIntro() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Quiz Intro</h1>
      <Link to="/quiz">
        <button>
          Start Quiz
        </button>
      </Link>
    </>
  )
}

export default QuizIntro
