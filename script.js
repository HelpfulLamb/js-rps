let computerScore = 0;
let humanScore = 0;

// round winning results (win, lose, draw)
const result_container = document.querySelector(".results");

const gameResult = document.createElement("h3");
gameResult.classList.add("game-outcome");
result_container.appendChild(gameResult);

const movePlayed = document.createElement("p");
movePlayed.classList.add("computer-move");
result_container.appendChild(movePlayed);

const userMove = document.createElement("p");
userMove.classList.add("user-move");
result_container.appendChild(userMove);

const newGame = document.createElement("button");
newGame.classList.add("new-game");


function getComputerChoice(){
    const game_moves = ['rock', 'paper', 'scissors'];
    let computer_choice = Math.floor(Math.random() * 3);
    return game_moves[computer_choice];
}


function playRound(computerChoice, humanChoice){
    console.log("Computer: " + computerChoice + " ; Human: " + humanChoice);
    if(computerChoice === humanChoice){
        gameResult.textContent = "Draw";
        movePlayed.textContent = `Computer played ${computerChoice}`;
        userMove.textContent = `You played ${humanChoice}`;
    } else if((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')){
        gameResult.textContent = "You Win!";
        movePlayed.textContent = `Computer played ${computerChoice}`;
        userMove.textContent = `You played ${humanChoice}`;
        humanScore++;
    } else{
        gameResult.textContent = "You Lose!";
        movePlayed.textContent = `Computer played ${computerChoice}`;
        userMove.textContent = `You played ${humanChoice}`;
        computerScore++;
    }
    console.log("Scores: Computer = " + computerScore + " ; Human = " + humanScore);
}


const btn = document.querySelectorAll(".move");
btn.forEach((button) => {
    button.addEventListener("click", () => {
        if(computerScore === 5 || humanScore === 5){
            userMove.remove();
            movePlayed.remove();
            gameResult.textContent = "END";
            newGame.textContent = "New Game";
            result_container.appendChild(newGame);
        } else {
            let compPlay = getComputerChoice().toLowerCase();
            playRound(compPlay, button.id.toLowerCase());
        }
    });
});
