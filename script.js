function getComputerChoice() {
    let x = Math.random();
    if (x < 0.34) {
        return "rock";
    } else if (x <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const userInput = prompt("Enter rock, paper, or scissors: ");
    return userInput;
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const human = humanChoice.toLowerCase();
        const comp = computerChoice;

        if (human === comp) {
            console.log("Tie");
        } else if (
            (human === "rock" && comp === "scissors") ||
            (human === "paper" && comp === "rock") ||
            (human === "scissors" && comp === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${human.charAt(0).toUpperCase() + human.slice(1)} beats ${comp}.`);
        } else {
            computerScore++;
            console.log(`You lose! ${comp} beats ${human.charAt(0).toUpperCase() + human.slice(1)}.`);
        }
    }


    for (let i=1; i<=5; i++) {
        const human = getHumanChoice();
        const comp = getComputerChoice();
        playRound(human, comp)
    }

    console.log("Game Over");
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore>humanScore) {
        console.log("You lost the game!");
    } else {
        console.log("The game is tied!");
    }
}

playGame()