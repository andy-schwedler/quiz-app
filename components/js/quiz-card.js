console.clear();

// Add bookmark-background
const bookmark = document.querySelector('[data-js="bookmark-button"]');
const bookmarkContainer = document.querySelector('[data-js="bookmark-button"]');

const showAnswerBtn = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answerField"]');

bookmarkContainer.addEventListener("click", () => {
  bookmark.classList.toggle("question-card--container__bookmark--clicked");
});

showAnswerBtn.addEventListener("click", (event) => {
  answer.classList.toggle("show-answer");
  showAnswerBtn.textContent =
    showAnswerBtn.textContent === "hide answer" ? "show answer" : "hide answer";
});

async function fetchCharacter() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  const results = data.results;
  const charactersNames = results.map((character) => {
    const names = character.names;
    return names;
  });
}
fetchCharacter();

console.log(fetchCharacter);
