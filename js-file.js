
function computerPlay() {   //move up for accessibility of function below. also see stack overflow, "How do you select a random variable within a function in JavaScript?"
    let choices=["Rock","Paper","Scissors"]; 
   return choices[Math.floor(Math.random()*choices.length)]
}

let playerScore=0;
let computerScore=0;

let chooseRock=document.querySelector(".Rock");
//chooseRock.addEventListener ("click", function(e){console.log(e.target);}); ///test function
chooseRock.addEventListener("click",() =>{
  if (computerPlay()==="Paper") {
     Statements.textContent= `You chose Rock and Computer chose Paper .You lose,Paper beats Rock! Computer Total Points: ${computerScore+=1}  point(s).`; 
     }
  else if (computerPlay()==="Scissors") {
     Statements.textContent=`You chose Rock and Computer chose Scissors .You win,Rock beats Scissors! Player Total Points: ${playerScore+=1} point(s).`;
     }
  else {
     Statements.textContent= "You chose Rock and Computer chose Rock. Its a tie! No one gets points";
     }
  showTally();  //required to be placed near the end as the function needs to read the results.
  endGame();
 });

 let choosePaper=document.querySelector(".Paper");
 choosePaper.addEventListener("click",() =>{
   if (computerPlay()==="Scissors") {
       Statements.textContent= `You chose Paper and Computer chose Scissors .You lose,Scissors beats Paper! Computer Total Points: ${computerScore+=1}  point(s).`;
      }
   else if (computerPlay()==="Rock") {
       Statements.textContent=`You chose Paper and Computer chose Rock .You win,Paper beats Rock! Player Total Points: ${playerScore+=1} point(s).`;
      }
   else {
      Statements.textContent= "You chose Paper and Computer chose Paper. Its a tie! No one gets points";
      }
    showTally();
    endGame();
  });
 
  let chooseScissors=document.querySelector(".Scissors");
  chooseScissors.addEventListener("click",() =>{
    if (computerPlay()==="Rock") {
      Statements.textContent= `You chose Scissors and Computer chose Rock .You lose,Rock beats Scissors! Computer Total Points: ${computerScore+=1}  point(s).`; 
       }
    else if (computerPlay()==="Paper") {
      Statements.textContent= `You chose Scissors and Computer chose Paper .You win,Scissors beats Paper! Player Total Points: ${playerScore+=1} point(s).`;
       }
    else {
      Statements.textContent= "You chose Scissors and Computer chose Scissors. Its a tie! No one gets points";
       }
    showTally();
    endGame();
   });

   function showTally (){
    playerScoreTally.textContent=`Player score: ${playerScore}`;
    computerScoreTally.textContent=`Computer score: ${computerScore}`;
   }

let Statements=document.querySelector(".text");
let playerScoreTally=document.querySelector(".PlayerScore");
let computerScoreTally=document.querySelector(".ComputerScore");

  function endGame(){
if (computerScore>=5){
  alert ("Game Over,Computer won. Hit Refresh to play again!");
  }
 else if (playerScore>=5){
  alert ("Congratulations, you won!Hit Referesh to play again!");
  }
}