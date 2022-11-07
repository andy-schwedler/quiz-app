const form = document.querySelector('[data-js="form"]');
const submitButton = document.querySelector('[data-js="submit-button"]');

//store user entries in a variable
form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(event);
  const questionInput = form.question.value;
  const answerInput = form.answer.value;
  const tagsInput = form.tags.value;

  // if no Input has been made
  const section = document.createElement("section");
  document.body.append(section);
  section.classList.add("question-card--flex-container");

  const createdQuestion = document.createElement("p");
  section.append(createdQuestion);
  createdQuestion.classList.add("question-card--flex-container__question");
  createdQuestion.textContent = questionInput;

  const createdAnswer = document.createElement("p");
  section.append(createdAnswer);
  createdAnswer.classList.add("show-answer");
  createdAnswer.textContent = answerInput;

  // const createdTagsContainer = document.createElement("ul");
  // section.append(createdTagsContainer);
  // createdTagsContainer.classList.add("question-card--flex-container__tags");

  // const createdTagsInput = document.createElement("li");
  // ul.append(createdTagsInput);
  // createdTagsInput.classList.add("question-card--flex-container__tags__item");
  // createdTagsInput.textContent = createdTagsInput;

  event.target.elements.question.focus();
  event.target.reset();
});
