
//let buttons=document.querySelectorAll("button");   //this is the high level which is correct but too hard to proceed.

//buttons.forEach((button) => {
//    button.addEventListener ("click", playRound);
//});

function computerPlay() {   //move up for accessibility of function below. alio see stack overflow, "How do you select a random variable within a function in JavaScript?"
    let choices=["Rock","Paper","Scissors"]; 
   return choices[Math.floor(Math.random()*choices.length)]
}

let playerScore=0;
let computerScore=0;

let chooseRock=document.querySelector(".Rock");
//chooseRock.addEventListener ("click", function(e){console.log(e.target);}); ///test function
//chooseRock.addEventListener("click", computerPlay);  //adding this line will make it loop once without any input
chooseRock.addEventListener("click",() =>{
  if (computerPlay()==="Paper") {
      console.log (`You chose Rock and Computer chose Paper .You lose,Paper beats Rock! Computer Total Points: ${computerScore+=1}  point(s).`); 
     }
  else if (computerPlay()==="Scissors") {
     console.log (`You chose Rock and Computer chose Scissors .You win,Rock beats Scissors! Player Total Points: ${playerScore+=1} point(s).`);
     }
  else {
     console.log (`You chose Rock and Computer chose Rock. Its a tie! No one gets points`)
     }
 });

 let choosePaper=document.querySelector(".Paper");
 choosePaper.addEventListener("click",() =>{
   if (computerPlay()==="Scissors") {
       console.log (`You chose Paper and Computer chose Scissors .You lose,Scissors beats Paper! Computer Total Points: ${computerScore+=1}  point(s).`); 
      }
   else if (computerPlay()==="Rock") {
      console.log (`You chose Paper and Computer chose Rock .You win,Paper beats Rock! Player Total Points: ${playerScore+=1} point(s).`);
      }
   else {
      console.log (`You chose Paper and Computer chose Paper. Its a tie! No one gets points`)
      }
  });
 
  let chooseScissors=document.querySelector(".Scissors");
  chooseScissors.addEventListener("click",() =>{
    if (computerPlay()==="Rock") {
        console.log (`You chose Scissors and Computer chose Rock .You lose,Rock beats Scissors! Computer Total Points: ${computerScore+=1}  point(s).`); 
       }
    else if (computerPlay()==="Rock") {
       console.log (`You chose Paper and Computer chose Rock .You win,Paper beats Rock! Player Total Points: ${playerScore+=1} point(s).`);
       }
    else {
       console.log (`You chose Paper and Computer chose Paper. Its a tie! No one gets points`)
       }
   });
  



let Statements=document.querySelector("div")
//Statements.textContent= ""

 //let playerScoreTally=document.querySelector(".PlayerScore");
 //playerScoreTally.textContent ("click",()=>{
 //  return playerScore;
 //});



// function playerSelectionLoop() { 
// let playerPrompt=prompt(`choose "Rock","Paper" or "Scissors"`);
// return playerPrompt;        //return as a way to record the results
//}


function playRound() {
let playerSelection="click";     //playerSelectionLoop(); //bind how each side plays with a variable and further explain the game outcomes using the variable
let computerSelection=computerPlay();
//player chooses rock//
if ((playerSelection==="Rock")&&(computerSelection==="Paper")) {
    console.log (`You chose ${playerSelection} and Computer chose ${computerSelection}.You lose,Paper beats Rock! Computer Total Points: ${computerScore+=1} point(s).`); 
  }
else if ((playerSelection==="Rock")&&(computerSelection==="Scissors")) {
    console.log (`You chose ${playerSelection} and Computer chose ${computerSelection}.You win,Rock beats Scissors! Player Total Points: ${playerScore+=1} point(s).`);
  }
//player chooses scissors//
if ((playerSelection==="Scissors")&&(computerSelection==="Rock")) {
    console.log (`You chose ${playerSelection} and Computer chose ${computerSelection}.You lose,Rock beats Scissors! Computer Total Points: ${computerScore+=1} point(s).`);
  }
else if ((playerSelection==="Scissors")&&(computerSelection==="Paper")) {
    console.log (`You chose ${playerSelection} and Computer chose ${computerSelection}.You win, Scissors beats paper! Player Total Points: ${playerScore+=1} point(s).`)
  }
//player chooses paper//
if ((playerSelection==="Paper")&&(computerSelection==="Scissors")) {
    console.log (`You chose ${playerSelection} and Computer chose ${computerSelection}.You lose,Scissors beats Paper! Computer Total Points: ${computerScore+=1} point(s).`);
  }
else if ((playerSelection==="Paper")&&(computerSelection==="Rock")) {
    console.log (`You chose ${playerSelection} and Computer chose ${computerSelection}.You win, Paper beats Rock! Player Total Points: ${playerScore+=1} point(s).`);
  }
//case of ties//
else if (playerSelection===computerSelection){
    console.log (`You chose ${playerSelection} and Computer chose ${computerSelection}. Its a tie! No one gets points`)
  }
}

//to loop the game 5 times//  change the way the game is played
//function game() {
//for (let i=0; i<5; i++) {
//   playRound();
//  }
//}

//game();

//if (playerScore>computerScore){
//console.log("Player won overall!");
//}

//if (computerScore>playerScore) {
//console.log("Computer won overall!");
//}

//if (playerScore===computerScore) {
//console.log("It's a tie overall!");
//}