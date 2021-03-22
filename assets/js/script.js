// DOM VARIABLES
var startButton = document.getElementById("start-button");
var wordToGuessEl = document.getElementById("word-to-guess");
var winsEl = document.getElementById("wins");
var lossesEl = document.getElementById("losses");
var secondsRemainingEl = document.getElementById("seconds-remaining");

var wordToGuess = "banana";
var wordToDisplay = "";

// JAVASCRIPT VARIABLES

// FUNCTION DEFINITIONS

function generateText() {
  for (var i = 0; i < wordToGuess.length; i++) {
    // Lookup the .includes method in javascript and think, "Where could I store, a user's guesses?"
    // wordToDisplay = wordToDisplay + " " + wordToGuess[i] + " ";
    wordToDisplay = wordToDisplay + " _ ";
  }
  wordToGuessEl.textContent = wordToDisplay;
}

// EVENT LISTENERS

// Listen for the start button click.

// Listen for keyboard presses.

// FUNCTION CALLS
generateText();
