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