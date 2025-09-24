import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from "react-router";
import { StrictMode } from 'react';


import './index.css'
import QuizIntro from './Components/QuizIntro.jsx'
import Quiz from './Components/Quiz.jsx';
import Results from './Components/Results.jsx';
import { Provider } from 'react-redux';
import store from './app/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<QuizIntro />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  </Provider>
</StrictMode>
)
