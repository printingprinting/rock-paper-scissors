

//Randomly set a choice for the computer
function getComputerChoice() {
    let x = parseInt(Math.floor(Math.random() * 3) + 1);
    let y = "";

    if (x === 1) {
        computerChoice = "Rock";
    } else if (x === 2) {
        computerChoice = "Paper";
    } else if (x === 3) {
        computerChoice = "Scissors";
    }
}

let playerChoice = "";
//Have the player enter a choice
function getPlayerChoice() {
    playerChoice = prompt("Choose rock, paper, or scissors")
}
