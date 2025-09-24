import './Results.css';
import { Link } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { truncateAnswers } from '../app/quizSlice';

function Results() {
    const dispatch = useDispatch();
    const answers = useSelector((state) => state.quiz.answers);
    const questions = useSelector((state) => state.quiz.questions);
    const totalQuestions = questions.length;
    const answeredQuestions = answers.length;
    const wrongAnswers = answers.filter(a => a.answer !== questions.find(q => q.question === a.question)?.correct_answer).length;
    const correctAnswers = answeredQuestions - wrongAnswers;
    return (
        <div className="results-container">
            <h2 className={`result-message ${correctAnswers >= 5 ? "success" : ""}`}>{`${correctAnswers >= 5 ? "Congratulations You Passed!" : "Minimum Passing Score Required 50%!"}`}</h2>
            <h1>Your Score: {Math.round((correctAnswers/totalQuestions) * 100 )}%</h1>
            <p>Total : {totalQuestions}</p>
            <p>Unanswered : {totalQuestions - answeredQuestions}</p>
            <p>Correct : {correctAnswers}</p>
  
            <Link to="/">
                <button
                    className="retake-button"
                 onClick={()=>{
                    dispatch(truncateAnswers());
                }}>
                    Retake Quiz
                </button>
                
            </Link>
        </div>
    );
}
export default Results;