// DOM VARIABLES
var startButton = document.getElementById("start-button");
var wordToGuessEl = document.getElementById("word-to-guess");
var winsEl = document.getElementById("wins");
var lossesEl = document.getElementById("losses");
var secondsRemainingEl = document.getElementById("seconds-remaining");

var wordToGuess = "banana";
var wordToDisplay = "";
var guessedLetters = [];

var hasGameStarted = false;
var wins = localStorage.getItem("wins");
var losses = localStorage.getItem("losses");

// JAVASCRIPT VARIABLES

// FUNCTION DEFINITIONS

function generateText() {
  wordToDisplay = "";
  for (var i = 0; i < wordToGuess.length; i++) {
    if (guessedLetters.includes(wordToGuess[i])) {
      wordToDisplay = wordToDisplay + " " + wordToGuess[i] + " ";
    } else {
      wordToDisplay = wordToDisplay + " _ ";
    }
    // Lookup the .includes method in javascript and think, "Where could I store, a user's guesses?"
  }
  wordToGuessEl.textContent = wordToDisplay;
}

// EVENT LISTENERS

// Listen for the start button click.
startButton.addEventListener("click", function () {
  hasGameStarted = true;
  // Start the countdown
});

// Listen for keyboard presses.
document.addEventListener("keydown", function (event) {
  if (hasGameStarted) {
    console.log(event.key);
    guessedLetters.push(event.key);
    generateText();
  }
});

// FUNCTION CALLS
generateText();
