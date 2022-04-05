let playerScore = 0;
let computerScore = 0;

// computer generates a random number between 1 and 3
let compNum = Math.floor(Math.random() * 3) + 1;

// a func to allow the computer to participate
function computerPlay (num) {
    
    switch (num){
        case 1:
            selection = 'rock';
            break;
        case 2:
            selection = 'paper';
            break;
        case 3:
            selection = 'scissors';
            break;
        default:
            selection = "There's been a problem";
    }

    console.log(selection);
    return selection;
}

//computerPlay(compNum);

function playerPlay () {
    selection = prompt("Rock, Paper or Scissors: ");
    selection = selection.toLowerCase(); //to make the selection case insensitive - will try to find the regex later

    if (selection === 'r' | selection === 'rock' | selection === 'roc' | selection === 'rok'){
        return "rock";
    } else if (selection === 's' | selection === 'sissors' | selection === 'cissors' | selection === 'scissor' | selection === 'scissors'){
        return "scissors";
    } else if (selection === 'p' | selection === 'pape' | selection === 'paper' | selection === 'papep') {
        return "paper";
    } else {
        return "invalid entry";
    }
}

function playRound(playerSelection, computerSelection) {
   
    // computer wins
    if (playerSelection == 'rock' && computerSelection == 'paper'){
        computerScore++;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        computerScore++;
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return "You Lose! Rock beats Scissors";
    }

    //player wins
    if (playerSelection == 'rock' && computerSelection == 'scissors'){
        playerScore++;
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore++;
        return "You Win! Paper beats Rock";
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return "You Win! Scissors beats Paper";
    }

    //draw
    if (playerSelection === computerSelection){
        return `You picked ${playerSelection} and computer picked ${computerSelection}`;
    }
}


// function to play 5 rounds of the game;
function game () {

    for (let i = 0; i < 5; i++){
        const playerSelection = playerPlay();
        const computerSelection = computerPlay(compNum);
        //console.log(playRound(playerSelection, computerSelection));

        console.log(`Player Score is ${playerScore} and Computer Score is ${computerScore}.`)
    }

    if (playerScore > computerScore){
        alert('Congratulations! You win')
    } else if (playerScore < computerScore) {
        alert('Too Bad! You lose')
    } else {
        alert("It's a draw!")
    }
}

game();