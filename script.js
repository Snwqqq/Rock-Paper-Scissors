
//create value witch will store user input + add value for win
const scoreElement = document.querySelector('.score');
const paperContainer = document.querySelector('.container-paper');
const scissorsContainer = document.querySelector('.container-scissors');
const rockContainer = document.querySelector('.container-rock');
const playerChoiseScreen = document.querySelector('.player-choise-screen');
let score = 0;
let lastScore=0;
let falseValue=false;
let userChoice;
let userWin=false;
const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

playerChoiseScreen.addEventListener("mouseover", (event)=>{
    let targer = event.target;
    switch(targer.id){
        case "container-paper":
            let textPaper = paperContainer.lastElementChild;
            textPaper.style.opacity = 1;
            break;
        case "container-scissor":
            let textScissor = scissorsContainer.lastElementChild;
            textScissor.style.opacity = 1;
            break;
        case "container-rock":
            let textRock = rockContainer.lastElementChild;
            textRock.style.opacity = 1;
            break;
    }
    });
    playerChoiseScreen.addEventListener("mouseout", (event)=>{
        let targer = event.target;
        switch(targer.id){
            case "container-paper":
                let textPaper = paperContainer.lastElementChild;
                textPaper.style.opacity = 0;
                break;
            case "container-scissor":
                let textScissor = scissorsContainer.lastElementChild;
                textScissor.style.opacity = 0;
                break;
            case "container-rock":
                let textRock = rockContainer.lastElementChild;
                textRock.style.opacity = 0;
                break;
        }
        });


        playerChoiseScreen.addEventListener("click", (event)=>{
            let targer = event.target;
            switch(targer.id){
                case "container-paper":
                    userChoice = PAPER;
                    playRPS();
                    break;
                case "container-scissor":
                    userChoice = SCISSORS;
                    playRPS();
                    break;
                case "container-rock":
                    userChoice = ROCK;
                    playRPS();
                    break;
            }
            });
    





//random a value from the computer 1to3
function playRPS()
{
    let pcChoice= Math.round((Math.random()*2)+1);


    switch(userChoice){
        case ROCK:
            switch(pcChoice){
                case ROCK: 
                alert("PC CHOOSE ROCK!")
                break;
                case PAPER:
                    alert("PC CHOOSE PAPER!")
                    userWin = false;
                    score--;
                break
                case SCISSORS:
                    alert("PC CHOOSE SCISSORS!")
                    score++;
                    userWin = true;
                break;
            }
        break;
    
        case PAPER: 
        switch(pcChoice){
            case ROCK:
                alert("PC CHOOSE ROCK!")
                 score++;
                 userWin = true;
            break;
            case PAPER:
                alert("PC CHOOSE PAPER!")
            break
            case SCISSORS:
                alert("PC CHOOSE SCISSORS!")
                score--;
                userWin = false;
            break;
        }
        break;
        case SCISSORS:
            switch(pcChoice){
                case ROCK:
                    alert("PC CHOOSE ROCK!")
                     score--;
                     userWin = false;
                break;
                case PAPER:
                    alert("PC CHOOSE PAPER!")
                    score++;
                    userWin = true;
                break
                case SCISSORS:
                    alert("PC CHOOSE SCISSORS!")
                break;
            }
        break;

                        }    
userChoice=undefined;
if(!falseValue){
if(lastScore!=score)
    {
if(userWin){
    alert("YOU WIN!\n" + " Score: " + score);
    lastScore=score;
}
else
{
    alert("YOU LOOSE!\n" + " Score: " + score);
    lastScore=score;
}
 }
 else{
    alert("IT'S A TIE! TRY AGAIN!\n" + " Score: " + score);
 }
}
else
{
    falseValue=false;
}



if(score===3)
alert("GAME OVER! YOU WIN");
if(score===-3)
alert("GAME OVER! YOU LOOSE!");
}
//create switch and based on user input check who win or tie
//display result to the user
//increase score if not a tie
//start over until score is 3