function computerPlay(computerSelection) {
 let rockPaperScssrs = ['rock', 'paper', 'scizzors']
 computerSelection = rockPaperScssrs[Math.floor(Math.random() * rockPaperScssrs.length)]
 //computerSelection = Math.floor(Math.random() * rockPaperScssrs.length)
console.log(computerSelection)
return computerSelection
}

function gamePlay(playerSelection, computerSelection) {
    computerSelection = computerPlay()
    playerSelection = prompt()

    if (playerSelection == computerSelection) {
        alert("Tie!")
    }

    if(playerSelection == 'rock' && computerSelection == 'paper') {
        alert("You lose!")
    }
    if(playerSelection == 'scizzors' && computerSelection == 'paper') {
        alert("You win!")
    }
    if(playerSelection == 'paper' && computerSelection == 'rock') {
        alert("You win!")
    }
    if(playerSelection == 'scizzors' && computerSelection == 'rock') {
        alert("You lose!")
    }
    if(playerSelection == 'rock' && computerSelection == 'scizzors') {
        alert("You win!")
    }
    if(playerSelection == 'paper' && computerSelection == 'scizzors') {
        alert("You lose!")
    }
}

gamePlay()