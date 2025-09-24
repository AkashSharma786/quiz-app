import './Question.css';
import { useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { setAnswer } from '../app/quizSlice';

const Question = ({ question, options}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    
    const dispatch = useDispatch();

    useEffect(()=>{
        setSelectedOption(null);
   
    },[question]);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        dispatch(setAnswer({
            "question" : question,
            "answer" : option
        }))
    }

    return (
        <div className="question-container">
            <h2 className="question-text">{question}</h2>
            <div className="options-container">
                {options.map((option, index) => (
                    
                    <label key={index} className="option-label">
                        <input
                            type='radio'
                            name='quiz-options'
                            value={option}
                            checked={selectedOption === option}
                            className="option-button"
                            onChange={() => handleOptionChange(option)}
                        />
                        {option}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default Question;
