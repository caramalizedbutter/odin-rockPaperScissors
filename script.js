let choice = ["rock", "paper", "scissors"], playerScore = 0, compScore = 0, draw = 0, roundCount = 0;

//All UI Elements are created globally
const logBox = document.createElement("div");
const body = document.querySelector("body");
logBox.setAttribute("id", "logBox");
body.appendChild(logBox);
const logText = document.createElement("div");
const logScore = document.createElement("div");
const logPlayerScore = document.createElement("div");
const logCompScore = document.createElement("div");
logText.setAttribute("id", "logText");
logScore.setAttribute("id", "logScore");
logPlayerScore.setAttribute("id", "logPlayerScore");
logCompScore.setAttribute("id", "logCompScore");
logBox.append(logText, logScore);
logScore.append(logPlayerScore, logCompScore);
logText.textContent = `Start the game!!!`;
logCompScore.textContent = `Computer Score : ${compScore}`;
logPlayerScore.textContent = `Player Score : ${playerScore}`;

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    console.log(`Computer chose ${choice[compChoice]}`);
    return choice[compChoice];
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    roundCount += 1;
    if (humanChoice === computerChoice) {
        draw += 1;
        console.log(`It's a draw! Both chose ${humanChoice}...`);
        logText.textContent = `It's a DRAW!!!`;
        if (roundCount <= 4) {
            logText.textContent = `Round ${roundCount} : DRAW`;
        }
    }
    else if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock")) {
        compScore += 1;
        logCompScore.textContent = `Computer Score : ${compScore}`;
        if (roundCount <= 4) {
            logText.textContent = `Round ${roundCount} : Computer wins...`;
        }
    }
    else {
        playerScore += 1;
        console.log(`${humanChoice} beats ${computerChoice}! You win...`);
        logPlayerScore.textContent = `Player Score : ${playerScore}`;
        if (roundCount <= 4) {
            logText.textContent = `Round ${roundCount} : You win!!!`;
        }
    }
    if (roundCount >= 5) {
        document.querySelectorAll("button").forEach((button) => button.disabled = true);
        if (playerScore > compScore) {
            logText.textContent = "You won the game!!!";
        }
        else if (compScore > playerScore) {
            logText.textContent = "Oh no! Computer won the game.";
        }
        else {
            logText.textContent = "Nobody won, It's a draw."
        }
    }
}

function playGame() {
    document.querySelectorAll("button").forEach((buttn) => {
        buttn.addEventListener("click", () => {
            playRound(buttn.id)
        });
    });
}

playGame();