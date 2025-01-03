let computerScore = 0;
let humanScore = 0;
let compPlay = '';
let humanPlay = '';


function getComputerChoice(){
    // 1 = rock, 2 = paper, 3 = scissors
    let computer_choice = Math.floor(Math.random() * 3) + 1;
    if(computer_choice === 1){
        compPlay = 'Rock';
    } else if(computer_choice === 2){
        compPlay = 'Paper';
    } else if(computer_choice === 3){
        compPlay = 'Scissors';
    }

    if(computer_choice === 1 || computer_choice === 2 || computer_choice === 3){
        return computer_choice;
    } else {
        return "Unknown";
    }
}

function getHumanChoice(){
    let player_choice = prompt("Choose: [1] Rock, [2] Paper, [3] Scissors").toLowerCase();
    if(player_choice === "rock"){
        humanPlay = 'Rock';
        return 1;
    } else if(player_choice === "paper"){
        humanPlay = 'Paper';
        return 2;
    } else if(player_choice === "scissors"){
        humanPlay = 'Scissors';
        return 3;
    } else{
        return "Invalid Choice";
    }
}

function playRound(computerChoice, humanChoice){
    if(computerChoice === humanChoice){
        console.log("Draw");
    } else if((humanChoice === 1 && computerChoice === 3) || (humanChoice === 2 && computerChoice === 1) || (humanChoice === 3 && computerChoice === 2)){
        console.log('You win');
        humanScore++;
    } else{
        console.log('You lose');
        computerScore++;
    }
    console.log("Computer: " + compPlay + " ; Human: " + humanPlay);
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