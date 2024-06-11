// computer random choice
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// human choice
function getHumanChoice() {
  let choice = prompt("Choose rock, paper or scissors:");
  return choice;
}

// scores init
let humanScore = 0;
let computerScore = 0;

// play one round
function playRound(humanChoice, computerChoice) {
  console.log(`You choose: ${humanChoice}`);
  console.log(`Computer choose: ${computerChoice}`);

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win this round!");
    humanScore++;
  } else if (humanChoice === computerChoice) {
    console.log("It's a tie.");
  } else {
    console.log("You lose this round!");
    computerScore++;
  }

  console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);
}

//play fine rounds
function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log("You won this game!");
  } else if (humanScore < computerScore) {
    console.log("You lost this game!");
  } else {
    console.log("It's a tie game.");
  }
}

playGame();
