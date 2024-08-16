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

console.log(getComputerChoice())