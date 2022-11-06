const form = document.querySelector('[data-js="form"]');
const submitButton = document.querySelector('[data-js="submit-button"]');

//store user entries in a variable
form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(event);
  const questionInput = form.question.value;
  const answerInput = form.answer.value;

  const section = document.createElement("section");
  form.append(section);
  section.classList.add("question-card--flex-container");

  const createdQuestion = document.createElement("p");
  section.append(createdQuestion);
  createdQuestion.classList.add("question-card--flex-container__question");
  createdQuestion.textContent = questionInput;

  const createdAnswer = document.createElement("p");
  p.append(createdAnswer);
  createdAnswer.classList.add("show-answer");
  createdAnswer.textContent = answerInput;

  //reset and focus on next card question
  event.target.elements.question.focus();
  event.target.reset();
});
