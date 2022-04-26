let playerScore = 0;
let computerScore = 0;

// computer generates a random number between 1 and 3
//let compNum = Math.floor(Math.random() * 3) + 1;

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
        return `You picked ${playerSelection} and computer picked ${computerSelection}`;
    }
}


// function to play 5 rounds of the game;
function game(event){
        let playerSelection = playerPlay(event);
        let compSelection = computerPlay(Math.floor(Math.random() * 3) + 1);
    
        console.log(playRound(playerSelection, compSelection));
        console.log(`Player Score is ${playerScore} and Computer Score is ${computerScore}.`)
        if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore){
            alert('Congratulations! You win')
        } else if (playerScore < computerScore) {
            alert('Too Bad! You lose')
        }
        
        playerScore = 0;
        computerScore = 0; 
    }

};


