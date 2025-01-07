console.log("Hello world")

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock")
    } else if(humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors")
    } else if(humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock")
    } else if(humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper")
    } else if(humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper")
    } else if(humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors")
    } else {
        console.log("Draw!")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)

function getComputerChoice() {
    let num = Math.floor(Math.random() * 100);

    if(num % 3 === 0) {
        return "rock";
    } else if(num % 2 === 0) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let playerChoice = prompt("Rock, Paper, or Scissors?");

    if (playerChoice.toLowerCase() === "rock") {
        return "rock";
    } else if (playerChoice.toLowerCase() === "paper") {
        return "paper";
    } else if (playerChoice.toLowerCase() === "scissors") {
        return "scissors";
    } else {
        return null;
    }
}

