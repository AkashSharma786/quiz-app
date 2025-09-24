import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
    name: "quiz",
    initialState: {
        questions: [],
        answers: [],

        
    },
    reducers: {
        setQuestions: (state, action) => {
            state.questions = action.payload;
        },
        truncateAnswers: (state) => {
            state.answers = [];
        },
        setAnswer: (state, action) => {
            const {question,answer} = action.payload;
            const existingQuestionIndex = state.answers.findIndex(a => a.question === action.payload.question);
            if (existingQuestionIndex !== -1) {
                state.answers[existingQuestionIndex] = action.payload;
            } else {
                state.answers.push(action.payload);
            }
        },

        
    }
});

export const { setQuestions, setAnswer, getQuestions, truncateAnswers } = quizSlice.actions;

export default quizSlice.reducer;
