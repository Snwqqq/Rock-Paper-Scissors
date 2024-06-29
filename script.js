
//create value witch will store user input + add value for win
let score = 0;
let lastScore=0;
let falseValue=false;
while(score!=3 && score!=-3){
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
        case "1":
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
    
        case "PAPER": 
        case "2":
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
        case "SCISSORS":
        case "3":
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
        default:
            alert("INVALID CHOICE TRY AGAIN");
            falseValue=true;
        break;

                        }    

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
}


if(score===3)
alert("GAME OVER! YOU WIN");
else
alert("GAME OVER! YOU LOOSE!");


//create switch and based on user input check who win or tie
//display result to the user
//increase score if not a tie
//start over until score is 3