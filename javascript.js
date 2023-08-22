function getComputerChoice(){
    const items = ["rock","paper","scissors"]
    var computerChoice = items[Math.floor(Math.random()*items.length)];
    console.log("Computer chooses: ",computerChoice);
    return computerChoice;
}



function getPlayerChoice(){
    var playerChoice = "rock";
    console.log("Player chooses: ",playerChoice.toLowerCase());
    return playerChoice.toLowerCase();
}

let draws = 0;
let playerWins = 0;
let computerWins = 0;


function playRound(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "rock") {
        console.log("1,1")
        draws ++;
        return "DRAW.";
    }   else if (playerChoice === "rock" && computerChoice === "paper") {
            console.log("1,2")
            computerWins ++;
            return "You lost. Paper beats rock!";
        }
        else if (playerChoice === "rock" && computerChoice === "scissors"){
            console.log("1,3")
            playerWins ++;
            return "You won. Rock beats scissors.";
        }
        else if (playerChoice === "paper" && computerChoice === "rock") {
            console.log("2,1")
            playerWins ++;
            return "You won. Paper beats rock!";
        }
        else if (playerChoice === "paper" && computerChoice === "paper") {
            console.log("2,2")
            draws ++;
            return "DRAW.";
        }
        else if (playerChoice === "paper" && computerChoice === "scissors") {
            console.log("2,3")
            computerWins ++;
            return "You lost. Scissors beat paper.";
        }
        else if (playerChoice === "scissors" && computerChoice === "rock") {
            console.log("3,1")
            computerWins ++;
            return "You lost. Rock beats scissors.";
        }
        else if (playerChoice === "scissors" && computerChoice === "paper") {
            console.log("3,2")
            playerWins ++;
            return "You won. Scissors beat paper.";
        }
        else if (playerChoice === "scissors" && computerChoice === "scissors") {
            console.log("3,3")
            draws ++;
            return "DRAW.";
        }
        else {
            return "invalid input from player"
        }
}



console.log(playRound(getPlayerChoice(), getComputerChoice()));

