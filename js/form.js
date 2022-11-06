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
  package.append(createdAnswer);
  createdAnswer.classList.add("show-answer");
  createdAnswer.textContent = answerInput;

  //reset and focus on next card question
  event.target.elements.question.focus();
  event.target.reset();
});

// <p class="question-card--flex-container__question">
//   What is the Undertakers real name?
// </p>
// <button
//   type="button"
//   class="question-card--flex-container__button"
//   data-js="answer-button"
// >
//   show answer
// </button>
// <p
//   class="question-card--flex-container__answer--hidden"
//   data-js="answerField"
// >
//   Mark W. Calaway
// </p>
// <ul class="question-card--flex-container__tags">
//   <li class="question-card--flex-container__tags__item">#css</li>
//   <li class="question-card--flex-container__tags__item">#flexbox</li>
//   <li class="question-card--flex-container__tags__item">#html</li>
// </ul>
// </section>
