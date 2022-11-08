console.clear();

const form = document.querySelector('[data-js="form"]');
const submitButton = document.querySelector('[data-js="submit-button"]');

function createQuizCard(question, answerInput) {
  const section = document.createElement("section");
  section.classList.add("question-card--flex-container");
  document.body.append(section);

  const createdQuestion = document.createElement("p");
  createdQuestion.classList.add("question-card--flex-container__question");
  createdQuestion.textContent = question;
  section.append(createdQuestion);

  const createdAnswer = document.createElement("p");
  createdAnswer.classList.add("show-answer");
  createdAnswer.textContent = answerInput;
  section.append(createdAnswer);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  createQuizCard(form.question.value, form.answer.value);

  event.target.elements.question.focus();
  event.target.reset();
});
