const form = document.querySelector('[data-js="form"]');
const submitButton = document.querySelector('[data-js="submit-button"]');
const createdCardList = document.querySelector('[data-js="createdCards"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = form.question.value;
  const answer = form.answer.value;

  event.target.elements.question.focus();
  event.target.reset();
});

function addTask(question, answer) {
  const newCard = document.createElement("li");
  createdCardList.append(newCard);
  const newQuestion = document.createElement("p");
  newQuestion.textContent = question;
  const newAnswer = document.createElement("p");
  newAnswer.textContent = answer;
  newCard.append(newQuestion);
  newCard.append(newAnswer);
}
