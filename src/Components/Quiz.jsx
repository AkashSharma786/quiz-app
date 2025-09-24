import './Quiz.css';
import { Link } from 'react-router';    

function Quiz() {
  return (
    <div className="quiz-container">
      <h2>Quiz Component</h2>
      {/* Quiz content will go here */}
        <Link to="/results">
            <button>
                Finish Quiz
            </button>
        </Link>
    </div>
  );
}

export default Quiz;