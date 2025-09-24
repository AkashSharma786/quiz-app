 import {useState , useEffect, memo} from 'react';
 import './QuestionTracker.css';
 import { useSelector } from 'react-redux';

 function QuestionTracker({ questionNumber}) {
    const answers = useSelector((state) => state.quiz.answers);
    const questions = useSelector((state) => state.quiz.questions);
    const isQuestionAnswered = answers.some(a => a.question === questions[questionNumber]?.question);
    useEffect(() => {
      setIsAnswered(isQuestionAnswered);
    }, [isQuestionAnswered]);

    const [isAnswered, setIsAnswered] = useState(false);
    return(
        <div className={`question-number ${isAnswered ? 'answered' : ''}`} 
       
            >
              {questionNumber + 1}
            </div>
    );
 }

    export default memo(QuestionTracker, (prevProps, nextProps) => {
      return prevProps.questionNumber === nextProps.questionNumber;
    });
 
 