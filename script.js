//create value witch will store user input + add value for win
let userChoice;
let userWin=false;
//ask user to pick rock,paper or scissors
userChoice=window.prompt("Pick:\n1.Rock\n2.Paper\n3.Scissors",'');
//give numeric const to rock,paper, scissorc
const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;
//convert it into numeric value if it is a string
if(typeof userChoice != Number){
    userChoice = userChoice.toUpperCase();
    alert(userChoice);
    switch(userChoice){
    case "ROCK": 
    
    break;
    }
}
//random a value from the computer 1to3
//create switch and based on user input check who win or tie
//display result to the user
//increase score if not a tie
//start over until score is 3