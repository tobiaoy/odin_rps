let pScore = 0;
let cScore = 0;
let dCount = 0;
let gameOver = false;
let cpuChoice;

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

const winCheck = (() => {

    //rock beats scissors
    const rockWin = (mv1, mv2) => {
        if (mv1 === 'rock' && mv2 === 'scissors'){
            return mv1;
        } else if (mv2 === 'rock' && mv1 === 'scissors'){
            return mv2;
        } 

    }   

    //scissors beats paper
    const sciWin = (mv1, mv2) => {
        if (mv1 === 'scissors' && mv2 === 'paper'){
            return mv1;
        } else if (mv1 === 'scissors' && mv2 === 'paper'){
            return mv2;
        }
    }

    //paper beats rock
    const paperWin = (mv1, mv2) => {
        if (mv1 === 'paper' && mv2 === 'rock'){
            return mv1;
        } else if (mv1 === 'paper' && mv2 === 'rock'){
            return mv2;
        }
    }


    return {rockWin, sciWin, paperWin}
})();



const game = (e) => {
    let player = playerMove(e);
    let cpu = cpuMove();
    cpuChoice = cpu;
    let winner;
    let draw = false;

    if (player === 'paper' || cpu === 'paper'){
        winner = winCheck.paperWin(player,cpu);
        draw = false;
    } else if (player === 'rock' || cpu === 'rock'){
        winner = winCheck.rockWin(player,cpu);
        draw = false;
    } else if (player === 'scissors' || cpu === 'scissors'){
        winner = winCheck.sciWin(player, cpu);
        draw = false;
    } else if (player === cpu){
        winner = ''
        draw = true;
    }

    if (winner === player){
        pScore += 1;
    } else if (winner === cpu){
        cScore += 1;
    } else if(draw) {
        dCount += 1;
    }

    displayCon.updateScore();

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

    const updateScore = () => {
        playerScore.textContent = pScore;
        cpuScore.textContent = cScore;
        drawCount.textContent = dCount;
    }
  

    rockControl.addEventListener('click', (e) => {
        game(e);
        playerIcon.style['background-image'] = 'url(img/rock.jpeg)';
        cpuIcon.style['background-image'] = `url(img/${cpuChoice}.jpeg)`;

        if (gameOver){
            if (pScore > cScore){
                winMessage.textContent = 'The Player wins this time...'
            } else if (cScore > pScore){
                winMessage.textContent = 'The computer takes the win ;D'
            }
            showWin();
        }
    })

    paperControl.addEventListener('click', (e)=>{
        game(e);
        playerIcon.style['background-image'] = 'url(img/paper.jpeg)';
        cpuIcon.style['background-image'] = `url(img/${cpuChoice}.jpeg)`;

        if (gameOver){
            if (pScore > cScore){
                winMessage.textContent = 'The Player wins this time...'
            } else if (cScore > pScore){
                winMessage.textContent = 'The computer takes the win ;D'
            }
            showWin();
        }
    })

    scissorsControl.addEventListener('click', (e)=>{
        game(e);
        playerIcon.style['background-image'] = 'url(img/scissors.jpeg)';
        cpuIcon.style['background-image'] = `url(img/${cpuChoice}.jpeg)`;

        if (gameOver){
            if (pScore > cScore){
                winMessage.textContent = 'The Player wins this time...'
            } else if (cScore > pScore){
                winMessage.textContent = 'The computer takes the win ;D'
            }
            showWin();
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
        winOverlay.style.display = 'none';
        updateScore();
    }

    resetBtn.addEventListener('click', reset);

    return {updateScore}

})()


/*

*/
