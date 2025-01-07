console.log("Hello world")
playGame()


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if(humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock")
            computerScore += 1;
        } else if(humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats scissors")
            humanScore += 1;
        } else if(humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats rock")
            humanScore += 1;
        } else if(humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats paper")
            computerScore += 1;
        } else if(humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats paper")
            humanScore += 1;
        } else if(humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats scissors")
            computerScore += 1;
        } else {
            console.log("Draw!")
            return 0;
        }
        return 1;
    }
    
    let game = 0;

    while(game < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        game += playRound(humanSelection, computerSelection)
    }

    console.log("Human Score: ", humanScore)
    console.log("Computer Score: ", computerScore)
    
}



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

