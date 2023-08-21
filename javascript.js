function getComputerChoice(){
    const items = ["rock","paper","scissors"]
    var computerChoice = items[Math.floor(Math.random()*items.length)];
    console.log("Computer chooses: ",computerChoice);
    return computerChoice;
}



function getPlayerChoice(){
    var playerChoice = "Rock";
    console.log("Player chooses: ",playerChoice.toLowerCase());
    return playerChoice.toLowerCase();
}



function playRound(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "rock") {
        console.log("1")
        return "DRAW.";
    }   else if (playerChoice === "rock" && computerChoice === "paper") {
            console.log("2")
            return "You lost. Paper beats rock!";
        }
        else if (playerChoice === "rock" && computerChoice === "scissors"){
            console.log("3")
            return "You won. Rock beats scissors.";
        }
}


console.log(playRound(getPlayerChoice(), getComputerChoice()));