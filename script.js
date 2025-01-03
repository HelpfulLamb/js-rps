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