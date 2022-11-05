console.clear();

// Add bookmark-background
const bookmark = document.querySelector('[data-js="bookmark-button"]');
const bookmarkContainer = document.querySelector('[data-js="bookmark-button"]');

bookmarkContainer.addEventListener("click", (event) => {
  bookmark.classList.toggle("question-card--container__bookmark--clicked");
});

const showAnswerBtn = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answerField"]');

showAnswerBtn.addEventListener("click", (event) => {
  answer.classList.toggle("show-answer");
  showAnswerBtn.innerHTML = "hide answer";
  showAnswerBtn.textContent =
    showAnswerBtn.textContent == "hide answer" ? "show answer" : "hide answer";
});
