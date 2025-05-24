import { questions } from './services/quizService.js';
import { QuestionComponent } from './components/questionComponent.js';
import { ResultComponent } from './components/resultComponent.js';

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  const app = document.getElementById('app');
  if (!app) return;
  app.innerHTML = '';

 if (currentQuestionIndex < questions.length) {
    const current = questions[currentQuestionIndex]; 
    const questionUI = new QuestionComponent(current, (isCorrect) => {
      if (isCorrect) score++; 
      currentQuestionIndex++; 
      showQuestion(); 
    });

    app.appendChild(questionUI.render()); 
  } else {
    const resultUI = new ResultComponent(score, questions.length); 
    app.appendChild(resultUI.render());
  }
}

document.addEventListener('DOMContentLoaded', showQuestion);

