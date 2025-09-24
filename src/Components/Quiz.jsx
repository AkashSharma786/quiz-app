import './Quiz.css';
import { useNavigate } from 'react-router';    
import { useState } from 'react';
function Quiz() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        
        <h1>00:00</h1>

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
       
          {[...Array(10)].map((_, index) => (
            <div key={index} className='question-number'>
              {index + 1}
            </div>
          ))}
        
      </nav>

      <button className='previous-button'>
        &lt;
      </button>

      <button className='next-button'>
        &gt;
      </button>
      <div className='questions-container'>
        Questions will be here
      </div>

      <footer>
          
        </footer>
    </div>
  );
}

export default Quiz;