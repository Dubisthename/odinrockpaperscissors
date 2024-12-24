// console.log("Hello world")

function getComputerChoice (){
    let answer = Math.floor(Math.random() * 3)
    if (answer == 0){
        return "rock"
    }else if (answer == 1){
        return "paper"
    }else {
        return "scissors"
    }
}

function getHumanChoice(){
   let playerChoice = prompt("Make your choice (Rock, Paper or Scissors: ")
    playerChoice = playerChoice.toLowerCase();
    switch (playerChoice){
        case "rock": 
            console.log("Your choice is Rock")
            return "rock";
            
        case "paper":
            console.log("Your choice is Paper")
            return "paper";
            
        case "scissors":
            console.log("Your choice is Scissors")
            return "scissors";
            
        default:
            console.log("You did not enter in a correct choice")
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("It's a tie!")

    }else if ( (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;

  } else if (
            (humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "scissors" && computerChoice === "rock") ||
            (humanChoice === "paper" && computerChoice === "scissors")
  ) {console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
  computerScore++;
  
}else{
    console.log("Invalid choice")
}
console.log(`Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()


playRound(humanSelection, computerSelection)
console.log(`Computer chose: ${computerSelection}`)