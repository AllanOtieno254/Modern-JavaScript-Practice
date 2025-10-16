// correct answers
const correctAnswers = ['B', 'B', 'B', 'B'];

// select the form
const form = document.querySelector('.quiz-form');

// select the result container
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault(); // stop page reload

  let score = 0;

  // get user answers
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ];

  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25; // each correct = 25%
    }
  });

  // show result container
  result.classList.remove('d-none');

  // animate the score display
  let output = 0;
  const scoreDisplay = result.querySelector('span');
  const timer = setInterval(() => {
    scoreDisplay.textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 20);
});
