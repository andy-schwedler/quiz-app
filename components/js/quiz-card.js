console.clear();

// Add bookmark-background
const bookmark = document.querySelector('[data-js="bookmark-button"]');
const bookmarkContainer = document.querySelector('[data-js="bookmark-button"]');

const showAnswerBtn = document.querySelectorAll('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answerField"]');

showAnswerBtn.addEventListener("click", (event) => {
  answer.classList.toggle("show-answer");
  showAnswerBtn.textContent =
    showAnswerBtn.textContent === "hide answer" ? "show answer" : "hide answer";
});
