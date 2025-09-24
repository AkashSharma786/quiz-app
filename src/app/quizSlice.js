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
        setAnswer: (state, action) => {
            state.answers.push(action.payload);
        },

        
    }
});

export const { setQuestions, setAnswer, getQuestions } = quizSlice.actions;

export default quizSlice.reducer;
