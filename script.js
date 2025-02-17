let choice=["rock", "paper", "scissors"], playerScore=0, compScore=0, draw=0;

function getComputerChoice(){
    let compChoice=Math.floor(Math.random()*3);
    console.log(`Computer chose ${choice[compChoice]}`);
    return choice[compChoice];
}

function getHumanChoice(){
    let x = prompt("Enter your guess : (rock, paper, scissors)");
    x=x.toLowerCase();
    if(choice.includes(x)){
        console.log(`You chose ${x}`);
        return x;
    }
    else{
        console.log("Invalid choice! Try again...");
        return getHumanChoice();
    }
}

function playRound(){
    let humanChoice=getHumanChoice();
    let computerChoice=getComputerChoice();
    if(humanChoice === computerChoice){
        draw+=1;
        console.log(`It's a draw! Both chose ${humanChoice}...`);
    }
    else if(humanChoice=="rock" && computerChoice=="paper"){
        compScore+=1;
        console.log("Paper beats rock! Computer wins...");
    }
    else if(humanChoice=="paper" && computerChoice=="scissor"){
        compScore+=1;
        console.log("Scissors beats paper! Computer wins...");
    }
    else if(humanChoice=="scissor" && computerChoice=="rock"){
        compScore+=1;
        console.log("Rock beats scissors! Computer wins");
    }
    else{
        playerScore+=1;
        console.log(`${humanChoice} beats ${computerChoice}! You win...`);
    }
}

function playGame(){
    for(let i=0;i<5;i++){
        playRound();
    }
    console.log(`Final Score : You -> ${playerScore} , Computer -> ${compScore} , Draw -> ${draw}`);
}

playGame();