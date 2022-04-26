let playerScore = 0;
let computerScore = 0;

// a func to allow the computer to participate
function computerPlay (num) {
    let selection;
    
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

    return selection;
}


function playerPlay(event){
    return event.target.id;
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
        return `You picked ${playerSelection} and computer also picked ${computerSelection}`;
    }
}

function reset(){
    playerScore = 0;
    computerScore = 0;
}

// function to play the game until either the player or computer gets to 5
function game(event){
        let playerSelection = playerPlay(event);
        let compSelection = computerPlay(Math.floor(Math.random() * 3) + 1);
    
        //console.log(playRound(playerSelection, compSelection));
        selection.textContent = playRound(playerSelection, compSelection);
        //console.log(`Player Score is ${playerScore} and Computer Score is ${computerScore}.`)
        score.textContent = `Player Score is ${playerScore} and Computer Score is ${computerScore}.`
        result.textContent = " ";

        if (playerScore === 5 || computerScore === 5) {
            if (playerScore > computerScore){
                result.textContent = 'Congratulations! You win the game';
            }  else if (playerScore < computerScore) {
                result.textContent = 'Too Bad! You lose';
            }
        
            reset();
    }

};


