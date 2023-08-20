function getComputerChoice(){
    const items = ["rock","paper","scissors"]
    var computerChoice = items[Math.floor(Math.random()*items.length)];
    return computerChoice;
}

console.log("Computer chooses: ",getComputerChoice());

function getPlayerChoice(){
    var playerChoice = "Rock";
    return playerChoice.toLowerCase();
}

console.log("Player chooses: ",getPlayerChoice());