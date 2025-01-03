let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    let computer_choice = Math.floor(Math.random() * 3) + 1;
    if(computer_choice === 1){
        return "Rock";
    } else if(computer_choice === 2){
        return "Paper";
    } else if(computer_choice === 3){
        return "Scissors";
    } else{
        return "Unknown";
    }
}

function getHumanChoice(){
    let player_choice = parseInt(prompt("Choose: [1] Rock, [2] Paper, [3] Scissors. [Input Number]:"));
    if(player_choice === 1){
        return "Rock";
    } else if(player_choice === 2){
        return "Paper";
    } else if(player_choice === 3){
        return "Scissors";
    } else{
        return "Invalid Number";
    }
}

function playRound(computerChoice, humanChoice){
    if(computerChoice === "Rock" && humanChoice === "Scissors"){
        console.log("you lose");
        computerScore++;
    } else if(computerChoice === "Paper" && humanChoice === "Rock"){
        console.log("you lose");
        computerScore++;
    } else if(computerChoice === "Scissors" && humanChoice === "Paper"){
        console.log("you lose");
        computerScore++;
    } else if(computerChoice === "Rock" && humanChoice === "Paper"){
        console.log("you win");
        humanScore++;
    } else if(computerChoice === "Paper" && humanChoice === "Scissors"){
        console.log("you win");
        humanScore++;
    } else if(computerChoice === "Scissors" && humanChoice === "Rock"){
        console.log("you win");
        humanScore++;
    } else{
        console.log("Draw");
    }
    console.log("Computer: " + computerChoice + " ; Human: " + humanChoice);
    console.log("Scores: Computer = " + computerScore + " ; Human = " + humanScore);
}

function playGame(){
    for(let i = 0; i < 5; i++){
        let compPlay = getComputerChoice();
        let humanPlay = getHumanChoice();
        playRound(compPlay, humanPlay);
    };
}
playGame();