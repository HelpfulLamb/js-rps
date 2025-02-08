let computerScore = 0;
let humanScore = 0;

// round winning results (win, lose, draw)
const result_container = document.querySelector(".results");
const end_container = document.querySelector(".end");
const round_container = document.querySelector(".round-moves");

const gameResult = document.createElement("h3");
gameResult.classList.add("game-outcome");
result_container.appendChild(gameResult);

const movePlayed = document.createElement("p");
movePlayed.classList.add("computer-move");
round_container.appendChild(movePlayed);

const userMove = document.createElement("p");
userMove.classList.add("user-move");
round_container.appendChild(userMove);

const newGame = document.createElement("button");
newGame.classList.add("new-game");

const displayCompScore = document.createElement("strong");
displayCompScore.classList.add("comp-score");
result_container.appendChild(displayCompScore);

const displayUserScore = document.createElement("strong");
displayUserScore.classList.add("user-score");
result_container.appendChild(displayUserScore);


function getComputerChoice(){
    const game_moves = ['rock', 'paper', 'scissors'];
    let computer_choice = Math.floor(Math.random() * 3);
    return game_moves[computer_choice];
}


function textChange(currentCompMove, currentUserMove, currentCompScore, currentUserScore){
    movePlayed.textContent = `Computer played ${currentCompMove}`;
    userMove.textContent = `You played ${currentUserMove}`;
    displayCompScore.textContent = `Computer Score: ${currentCompScore}`;
    displayUserScore.textContent = `Your Score: ${currentUserScore}`;
}


function playRound(computerChoice, humanChoice){
    console.log("Computer: " + computerChoice + " ; Human: " + humanChoice);
    if(computerChoice === humanChoice){
        gameResult.textContent = "You Both Drew This Round!";
        textChange(computerChoice, humanChoice, computerScore, humanScore);
    } else if((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')){
        humanScore++;
        gameResult.textContent = "You Win This Round!";
        textChange(computerChoice, humanChoice, computerScore, humanScore);
    } else{
        computerScore++;
        gameResult.textContent = "You Lose This Round!";
        textChange(computerChoice, humanChoice, computerScore, humanScore);
    }
    console.log("Scores: Computer = " + computerScore + " ; Human = " + humanScore);
}


const btn = document.querySelectorAll(".move");
btn.forEach((button) => {
    button.addEventListener("click", () => {
        if(computerScore === 5 || humanScore === 5){
            userMove.textContent = "";
            movePlayed.textContent = "";
            gameResult.textContent = "END";
            if(computerScore === 5){
                gameResult.textContent = "Computer Won The Game!";
            } else {
                gameResult.textContent = "You Won The Game!";
            }
            newGame.textContent = "New Game";
            end_container.appendChild(newGame);
            restart();
        } else {
            let compPlay = getComputerChoice().toLowerCase();
            playRound(compPlay, button.id.toLowerCase());
        }
    });
});

function restart(){
    const newgbtn = document.querySelectorAll(".new-game");
    newgbtn.forEach((button) =>{
        button.addEventListener("click", () =>{
            computerScore = 0;
            humanScore = 0;
            gameResult.textContent = "";
            userMove.textContent ="";
            movePlayed.textContent = "";
            displayCompScore.textContent = "";
            displayUserScore.textContent = "";

            newGame.remove();
        });
    });
}