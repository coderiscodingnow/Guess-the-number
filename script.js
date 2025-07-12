let secretNumber = Math.floor(Math.random() * 100) + 1;
let guessHistory = []; 

function checkGuess() {
  const userGuess = Number(document.getElementById("guess").value); //to get as number as value
  const feedback = document.getElementById("feedback");
  const history = document.getElementById("history");

  if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) { 
    feedback.textContent = "Please enter a number between 1 and 100!"; //text content to respective ids
    return;
  }

  guessHistory.push(userGuess);
  history.textContent = `Your guesses: ${guessHistory.join(", ")}`;

  if (userGuess === secretNumber) {
    feedback.textContent = `Correct! The number was ${secretNumber}. Reload to play again.`;
  } 
  else if (userGuess < secretNumber) {
    feedback.textContent = "Too low! Try again.";
  } 
  else {
    feedback.textContent = "Too high! Try again.";
  }

  document.getElementById("guess").value = ""; //empties the box for the next guess
}
