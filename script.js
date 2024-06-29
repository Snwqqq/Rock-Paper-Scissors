
//create value witch will store user input + add value for win
let score = 0;
let lastScore=0;
while(score!=3 || score!=-3){
let userChoice;
let userWin=false;
//give numeric const to rock,paper, scissorc
const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;
//ask user to pick rock,paper or scissors
userChoice=window.prompt("Pick:\n1.Rock\n2.Paper\n3.Scissors",'');
//random a value from the computer 1to3
let pcChoice= Math.round((Math.random()*2)+1);
//convert it into numeric value if it is a 
if(!userChoice){
    alert("PLAY THE GAME OR CLOSE THE PAGE!");
    continue;
}


    userChoice = userChoice.toUpperCase();
    //alert(userChoice);
    switch(userChoice){
    case "ROCK": 
        switch(pcChoice){
            case ROCK:
                 alert("PC CHOSE ROCK");    
            break;
            case PAPER:
                alert("PC CHOSE PAPER");
                userWin = false;
                score--;
            break
            case SCISSORS:
                alert("PC CHOSE SCISSORS");
                score++;
                userWin = true;
            break;
        }
    break;

    case "PAPER": 
    switch(pcChoice){
        case ROCK:
             alert("PC CHOSE ROCK");
             score++;
             userWin = true;
 
        break;
        case PAPER:
            alert("PC CHOSE PAPER");
        break
        case SCISSORS:
            alert("PC CHOSE SCISSORS");
            score--;
            userWin = false;
        break;
    }
    break;
    case "SCISSORS":
        switch(pcChoice){
            case ROCK:
                 alert("PC CHOSE ROCK");
                 score--;
                 userWin = false;
            break;
            case PAPER:
                alert("PC CHOSE PAPER");
                score++;
                userWin = true;
                alert("YOU WIN!");
            break
            case SCISSORS:
                alert("PC CHOSE SCISSORS");
            break;
        }
    break;
    default:
        userChoice = +userChoice;
    break;
                    }

        
        switch(userChoice){
            case ROCK: 
                switch(pcChoice){
                    case ROCK:
                         alert("PC CHOSE ROCK");
                    break;
                    case PAPER:
                        alert("PC CHOSE PAPER");
                        score--;
                        userWin = false;
                    break
                    case SCISSORS:
                        alert("PC CHOSE SCISSORS");
                        score++;
                        userWin = true;
                    break;
                }
            break;
        
            case PAPER: 
            switch(pcChoice){
                case ROCK:
                     alert("PC CHOSE ROCK");
                     score++;
                     userWin = true;
         
                break;
                case PAPER:
                    alert("PC CHOSE PAPER");
                break
                case SCISSORS:
                    alert("PC CHOSE SCISSORS");
                    score--;
                    userWin = false;
                break;
            }
            break;
            case SCISSORS:
                switch(pcChoice){
                    case ROCK:
                         alert("PC CHOSE ROCK");
                         score--;
                         userWin = false;
                    break;
                    case PAPER:
                        alert("PC CHOSE PAPER");
                        score++;
                        userWin = true;

                    break
                    case SCISSORS:
                        alert("PC CHOSE SCISSORS");
                    break;
                }
            break;
            default:
                alert("INVALID CHOICE TRY AGAIN 2");
                continue;

}

if(lastScore!=score)
    {
if(userWin){
    alert("YOU WIN!\n" + " Score: " + score);
}
else
{
    alert("YOU LOOSE!\n" + " Score: " + score);
}
 }
 else{
    alert("IT'S A TIE! TRY AGAIN!\n" + " Score: " + score);
 }

}

alert("GAME OVER!");
//create switch and based on user input check who win or tie
//display result to the user
//increase score if not a tie
//start over until score is 3