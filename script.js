

//Randomly set a choice for the computer
function getComputerChoice() {
    let x = parseInt(Math.floor(Math.random() * 3) + 1);
    let y = "";

    if (x === 1) {
        return "rock";
    } else if (x === 2) {
        return "paper";
    } else if (x === 3) {
        return "scissors";
    }
}



//Have the player enter a choice
function getPlayerChoice() {
    return prompt("Choose rock, paper, or scissors").toLowerCase();
}


//plays a round
function playRound(computerSelection, playerChoice) {
    if ((computerSelection === "paper") && (playerChoice === "rock")) {
        return "computer wins " + computerWins++;
    } else if ((computerSelection === "rock") && (playerChoice === "scissors")) {
        return "computer wins " + computerWins++;
    } else if ((computerSelection === "scissors") && (playerChoice === "paper")) {
        return "computer wins " + computerWins++;
    } else if ((computerSelection === "rock") && (playerChoice === "paper")) {
        return "player wins " + playerWins++;
    } else if ((computerSelection === "paper") && (playerChoice === "scissors")) {
        return "player wins " + playerWins++;
    } else if ((computerSelection === "scissors") && (playerChoice === "rock")) {
        return "player wins " + playerWins++;
    } else if (computerSelection === playerChoice) {
        return "Your Tied!";
    }
}

//initial values to track scores over the five rounds
let computerWins = 0;
let playerWins = 0;


//call to play the game
function game() {
    //loops so that 5 rounds are played
    for (let i = 0; i < 5; i++) {
        let playerChoice = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(computerSelection, playerChoice));
        // lets you know who won at the end of 5 rounds
        if (i === 4) {
            if (playerWins > computerWins) {
                console.log("Player Wins!");
            } else if (playerWins < computerWins) {
                console.log("Computer Wins!");
            } else {
                console.log("You Tied!")
            }
        }
    }
}
