console.clear();

const form = document.querySelector('[data-js="form"]');
const submitButton = document.querySelector('[data-js="submit-button"]');

function createQuizCard() {
  const section = document.createElement("section");
  section.classList.add("question-card--flex-container");
  document.body.append(section);

  const createdQuestion = document.createElement("p");
  createdQuestion.classList.add("question-card--flex-container__question");
  createdQuestion.textContent = form.question.value;
  section.append(createdQuestion);

  const createdAnswer = document.createElement("p");
  createdAnswer.classList.add("show-answer");
  createdAnswer.textContent = form.answer.value;
  section.append(createdAnswer);
}

form.addEventListener("submit", (createQuizCard) => {
  event.preventDefault();
  createQuizCard();
  event.target.elements.question.focus();
  event.target.reset();
});
