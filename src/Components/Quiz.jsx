import './Quiz.css';
import { useNavigate } from 'react-router';    
import { useState, useEffect , useCallback} from 'react';
import Question from './Question';
import {  useSelector } from 'react-redux';
import { setAnswer } from '../app/quizSlice';
import QuestionTracker from './QuestionTracker';

function Quiz() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const questions = useSelector((state) => state.quiz.questions);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const question = questions[currentQuestionIndex];
  const [options, setOptions] = useState([question.incorrect_answers.concat(question.correct_answer)]);

  useEffect(() => {
    if (question) {
      setOptions(question.incorrect_answers.concat(question.correct_answer).sort(() => Math.random() - 0.5));
    } 
  }, [question]);


  const handleTimeUp = () => {
    navigate("/results");
  }

  useEffect(() => {
    if (timeLeft === 0) {
      handleTimeUp();
      return;
    }
    
    const timeInterval = setInterval(() => {
      
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timeInterval);
  }, [timeLeft]);



  return (
    <div className="quiz-container">
      <header>
        <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <h1>{
          
          Math.floor(timeLeft / 60).toString().padStart(2, '0') + ':' + (timeLeft % 60).toString().padStart(2, '0')
      }</h1>

        <button
        onClick={() => {
          navigate("/results");
             }}
          className='end-quiz-button'> 
          End
        </button>
       
      </header>

      <nav className={`side-menu ${isMenuOpen ? 'active' : ''}`}>

        <h2>Question Navigator</h2>

          {[...Array(questions.length)].map((_, index) => (
           
           <button key={index}
            className="question-button"
             onClick={() => {
                  setCurrentQuestionIndex(index);
                  setIsMenuOpen(false);
                  console.log(index);
              }}  
           >
            <QuestionTracker questionNumber={index} key={index}/>
           </button>
              
           
          ))}
        </nav>

      <button className='previous-button'
      onClick={() => {
        if (currentQuestionIndex > 0) {
          setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
      }}
      >
        &lt;
      </button>

      <button className='next-button'
      onClick={() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
      }}
      >
        &gt;
      </button>
      <div className='questions-container'>
        <Question question={question.question} options={options} />
      </div>

      <footer>
          
        </footer>
    </div>
  );
}

export default Quiz;