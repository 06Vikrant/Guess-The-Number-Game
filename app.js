// random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Result paragraph in our HTML
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

// store references to the form 
// and are used to control submitting the guess later on.
const guessSubmit = document.querySelector(".guessSubmit")
let guessField = document.querySelector(".guessField")

let guessCount = 1;
let resetButton;

// Creating a function that will run the game
function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`
    console.log(guesses.textContent);

    if (userGuess === randomNumber) {
        lastResult.textContent = "Congratulations! You got it right!"
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    } else if (guessCount === 10 ) {
        lastResult.textContent = "!!!GAME OVER!!!";
        lowOrHi.textContent = "";
        setGameOver();
    } else {
        lastResult.textContent = "Wrong!";
        lastResult.style.backgroundColor = "red";
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "Last guess was too low!";
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "Last guess was too high!";
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}

//  adding an event listener to the guessSubmit button
guessSubmit.addEventListener("click", checkGuess);

// setGameOver() function that is supposed to be run once the game is over
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start New Game";
    // add it to the bottom of our existing HTML
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

// resetGame() function 
function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
        resetPara.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() * 100) + 1;
}

// setGameOver();



