function getComputerChoice(){
    const items = ["rock","paper","scissors"]
    var computerChoice = items[Math.floor(Math.random()*items.length)];
    return computerChoice
}

console.log("Computer chooses: ",getComputerChoice());