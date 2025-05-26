import { questions } from './services/quizService.js';
import { QuestionComponent } from './components/questionComponent.js';
import { ResultComponent } from './components/resultComponent.js';

let currentQuestionIndex = 0;
let score = 0;
let highestScore = Number(localStorage.getItem('highestScore')) || 0;

function updateHighestScore() {
  if (score > highestScore) {
    highestScore = score;
    localStorage.setItem('highestScore', highestScore.toString());
  }
}

function renderTopBar(): HTMLElement {
  const topBar = document.createElement('div');
  topBar.textContent = `High score: ${highestScore}`;
  topBar.style.textAlign = 'left';
  topBar.style.fontWeight = 'bold';

  return topBar;
}


function showQuestion() {
  const app = document.getElementById('app');
  if (!app) return;
  app.innerHTML = '';

  const container = document.createElement('div');
  container.appendChild(renderTopBar());

  if (currentQuestionIndex < questions.length) {
    const current = questions[currentQuestionIndex];
    const questionUI = new QuestionComponent(current, (isCorrect) => {
      if (isCorrect) score++;
      currentQuestionIndex++;
      showQuestion();
    });

    container.appendChild(questionUI.render());
  } else {
    updateHighestScore();

    const resultUI = new ResultComponent(score, questions.length);
    container.appendChild(resultUI.render());

const tryAgainBtn = document.createElement('button');
tryAgainBtn.textContent = 'Try again';

Object.assign(tryAgainBtn.style, {
  padding: '10px 15px',
  fontSize: '16px',
  cursor: 'pointer',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9',
  marginTop: '20px',
});

tryAgainBtn.onmouseenter = () => {
  tryAgainBtn.style.backgroundColor = '#00bfff';
  tryAgainBtn.style.color = 'white';
};

tryAgainBtn.onmouseleave = () => {
  tryAgainBtn.style.backgroundColor = '#f9f9f9';
  tryAgainBtn.style.color = 'black';
};

tryAgainBtn.onclick = () => {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
};

    container.appendChild(tryAgainBtn);
  }

  app.appendChild(container);
}

document.addEventListener('DOMContentLoaded', showQuestion);
