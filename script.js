let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  const resultsDiv = document.getElementById("results");
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    resultsDiv.innerHTML += `<p>It's a tie! Both chose ${humanChoice}</p>`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultsDiv.innerHTML += `<p>You win! ${
      humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
    } beats ${computerChoice}</p>`;
  } else {
    computerScore++;
    resultsDiv.innerHTML += `<p>You lose! ${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    } beats ${humanChoice}</p>`;
  }

  resultsDiv.innerHTML += `<p>Human Score: ${humanScore}, Computer Score: ${computerScore}</p>`;

  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      resultsDiv.innerHTML += "<p>Congratulations! You won the game!</p>";
    } else {
      resultsDiv.innerHTML +=
        "<p>Sorry, you lost the game. Better luck next time!</p>";
    }
    humanScore = 0;
    computerScore = 0;
  }
}

document
  .getElementById("rock")
  .addEventListener("click", () => playRound("rock", getComputerChoice()));
document
  .getElementById("paper")
  .addEventListener("click", () => playRound("paper", getComputerChoice()));
document
  .getElementById("scissors")
  .addEventListener("click", () => playRound("scissors", getComputerChoice()));
