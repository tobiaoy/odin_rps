let pScore = 0;
let cScore = 0;
let dCount = 0;
let gameOver = false;
let cpuChoice;
let roundRes;
let roundWin;

const cpuMove = () => {
    let  num = Math.floor((Math.random() * 3)+1);
    
    if(num === 1){
        return 'rock';
    } else if (num === 2){
        return 'paper';
    } else if (num === 3){
        return 'scissors'
    }
}

const playerMove = (e) => {
    return e.target.id;
}

const winCheck = (mv1, mv2) => {

//mv1 wins
if (mv1==='rock' && mv2 ==='scissors'){
    roundRes = `You win, rock beats scissors`;
    return mv1;
} else if (mv1==='paper' && mv2==='rock'){
    roundRes = `You win, paper beats rock`;
    return mv1;
} else if (mv1==='scissors' && mv2==='paper'){
    roundRes = `You win, scissors beats paper`;
    return mv1;
}

//mv2 wins
if (mv2==='rock' && mv1 ==='scissors'){
    roundRes = `You lose, rock beats scissors`;
    return mv2;
} else if (mv2==='paper' && mv1==='rock'){
    roundRes = `You lose, paper beats rock`;
    return mv2;
} else if (mv2==='scissors' && mv1==='paper'){
    roundRes = `You lose, scissors beats paper`;
    return mv2;
}

//draw
if(mv1 === mv2){
    roundRes = `It's a draw`
    return;
}

}


const game = (e) => {
    let player = playerMove(e);
    let cpu = cpuMove();
    cpuChoice = cpu;
    let winner = winCheck(player, cpu);
    
    if (winner === player){
        pScore++;
    } else if (winner === cpu){
        cScore++;
    } else if(winner === '' || winner === undefined) {
        dCount++;
    }

    roundWin = `You - ${pScore} : Ties - ${dCount} : CPU - ${cScore}`
    displayCon.updateScore();
    displayCon.updateResult();

    //add a condition for when the score reaches 5
    if (pScore === 5 || cScore === 5){
        gameOver = true;
    }

}

const displayCon = (() => {
    const playerIcon = document.querySelector('#player-icon');
    const cpuIcon = document.querySelector('#cpu-icon');
    const playerScore = document.querySelector('#player-score');
    const cpuScore = document.querySelector('#cpu-score');
    const drawCount = document.querySelector('#draw-count');
    const rockControl = document.querySelector('#rock');
    const paperControl = document.querySelector('#paper');
    const scissorsControl = document.querySelector('#scissors');
    const winOverlay = document.querySelector('#win-overlay');
    const winMessage = document.querySelector('#win-message');
    const resetBtn = document.querySelector('#reset-btn');
    const roundResult = document.querySelector('#round-result');
    const winScore = document.querySelector('#win-score');

    const updateScore = () => {
        playerScore.textContent = pScore;
        cpuScore.textContent = cScore;
        drawCount.textContent = dCount;
    }

    const updateResult = () => {
        roundResult.textContent = roundRes;
        winScore.textContent = roundWin;
    }
  

    rockControl.addEventListener('click', (e) => {
        game(e);       

        if (gameOver){
            if (pScore > cScore){
                winMessage.textContent = 'The Player wins this time...'
            } else if (cScore > pScore){
                winMessage.textContent = 'The computer takes the win ;D'
            }
            showWin();
        }
        
        if (!gameOver){
        playerIcon.style['background-image'] = 'url(img/rock.png)';
        cpuIcon.style['background-image'] = `url(img/${cpuChoice}.png)`;
        } 
        
    })

    paperControl.addEventListener('click', (e)=>{
        game(e);
        
        if (gameOver){
            if (pScore > cScore){
                winMessage.textContent = 'The Player wins this time...'
            } else if (cScore > pScore){
                winMessage.textContent = 'The computer takes the win ;D'
            }
            showWin();
        }
        
        if (!gameOver){
        playerIcon.style['background-image'] = 'url(img/paper.png)';
        cpuIcon.style['background-image'] = `url(img/${cpuChoice}.png)`;
        } 
        
    })

    scissorsControl.addEventListener('click', (e)=>{
        game(e);
        
        if (gameOver){
            if (pScore > cScore){
                winMessage.textContent = `The Player wins this time...`
            } else if (cScore > pScore){
                winMessage.textContent = `The computer takes the win ;D `
            }
            showWin();
        }
        
        if (!gameOver){
        playerIcon.style['background-image'] = 'url(img/scissors.png)';
        cpuIcon.style['background-image'] = `url(img/${cpuChoice}.png)`;
        }
        

    })

    const showWin = () => {
        winOverlay.style.display = 'flex';
    }

    const reset = () => {
        pScore = 0;
        cScore = 0;
        dCount = 0;
        gameOver = false;
        roundRes = `It's a new game`
        winOverlay.style.display = 'none';
        updateScore();
        updateResult();
    }

    resetBtn.addEventListener('click', reset);

    return {updateScore, updateResult}

})()


