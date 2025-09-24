import './Results.css';
import { Link } from 'react-router';

function Results() {
    return (
        <div className="results-container">
            <h2>Quiz Results</h2>
            {/* Display quiz results here */}
            <Link to="/">
                <button>
                    Retake Quiz
                </button>
            </Link>
        </div>
    );
}
export default Results;