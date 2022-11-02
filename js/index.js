const answer = document.querySelector('[data-js="answerField"]');
const answerButton = document.querySelector('[data-js="show-answer"]');

answerButton.addEventListener("click", () => {
  answer.classList.toggle("hidden");
  console.log();
});

/* const main = document.querySelector('[data-js="main"]');
const button = document.querySelector('[data-js="button"]');

button.addEventListener('click', () => {
	main.classList.add('page--primary');
*/
