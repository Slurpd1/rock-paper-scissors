let humanScore = 0;
let computerScore= 0;

function getComputerChoice() {
    // generate a random number between 0 and 2
    // use the randomly generated number to choose and return
    // either rock paper or scissors.
    let randomNum;
    let computerChoice;
    
    randomNum = Math.floor(Math.random()*3);

    // now decision is either 0 1 or 2.
    // lets say 0 is rock, 1 is paper, 2 is scissors.

    if (randomNum == 0) {
        computerChoice = "rock"; 
    }

    else if (randomNum == 1) {
        computerChoice = "paper"; 
    }

    else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice(computerChoice) {
    let humanChoice;

    humanChoice = prompt("Let's play rock paper scissors! Please input your choice (rock,paper,scissors):");

    if (humanChoice.toLowerCase() === "rock" || humanChoice.toLowerCase() === "scissors" || humanChoice.toLowerCase() === "paper") {
        return humanChoice;
    }

    else {
        // invalid input
    }
}

function evaluateGameOutcome(computerChoice, humanChoice) {
    if (computerChoice === "rock") {
        if (humanChoice === "rock") {
            console.log("Tie game!");
        }
        else if (humanChoice === "paper") {
            console.log("You win!!");
        }
        else if (humanChoice === "scissors") {
            console.log("You lose, better luck next time!");
        }
    }

    if (computerChoice === "paper") {
        if (humanChoice === "rock") {
            console.log("You lose, better luck next time!!");
        }
        else if (humanChoice === "paper") {
            console.log("Tie game!");
        }
        else if (humanChoice === "scissors") {
            console.log("You win!");
        }
    }

    if (computerChoice === "scissors") {
        if (humanChoice === "rock") {
            console.log("You win!");
        }
        else if (humanChoice === "paper") {
            console.log("You lose, better luck next time!!");
        }
        else if (humanChoice === "scissors") {
            console.log("Tie game!");
        }
    }
}


function main() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    evaluateGameOutcome(computerChoice, humanChoice);
}

main()