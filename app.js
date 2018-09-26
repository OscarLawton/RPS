function computerPlay() {
   
    choices = ["Rock", "Paper", "Scissors"]
    num = Math.floor((Math.random() * 2) + 0);
    return choices[num];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
    	console.log("Same draw!!!");
    }
    else if (playerSelection == "ROCK" && computerSelection == "Scissors"){
    	console.log("Yow won this round!!!")
        return "p";
    }
    else if (playerSelection == "ROCK" && computerSelection == "PAPER"){
    	console.log("The computer won this round!!!")
        return "c";
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
    	console.log("You won this round!!!")
        return "p";
    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
    	console.log("The computer won this round")
        return "c";
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
    	console.log("You won this round!")
        return "p";
    }
    else {
    	console.log("The computer won this round!")
        return "c";
    }

}

function game(){
    var rounds = 5;
    playerRoundsWon = 0;
    computerRoundsWon = 0;
    while (rounds > 0) {
        var inputValidator = false
        while (inputValidator == false){

            var playerSelection = prompt("Type Rock, Paper or Scissors").toUpperCase();
            if (playerSelection == "ROCK" || playerSelection == "PAPER" || playerSelection == "SCISSORS"){
                inputValidator = true
            }
            else {
                console.log("Not valid input, try again.")
                inputValidator = false
            }
        }
        var computerSelection = computerPlay().toUpperCase();
        if (playRound(playerSelection,computerSelection) == "p"){
            playerRoundsWon++;
        }
        else{
            computerRoundsWon++;
        }

        rounds--;
    }
    if (playerRoundsWon > computerRoundsWon){
        console.log("You won the game!!!")
    }
    else if (playerRoundsWon < computerRoundsWon){
        console.log("The computer won the game!!!")
    }
    else {
        console.log("It was a draw game.")
    }
}

game();
