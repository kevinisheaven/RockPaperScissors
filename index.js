function computerPlay(computerSelection) {
 let rockPaperScssrs = ['rock', 'paper', 'scizzors']
 computerSelection = rockPaperScssrs[Math.floor(Math.random() * rockPaperScssrs.length)]
 //computerSelection = Math.floor(Math.random() * rockPaperScssrs.length)
console.log(computerSelection)
return computerSelection
}
compScore = 0
playerScore = 0

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay()
    playerSelection = prompt()
    playerSelection = playerSelection.toLowerCase()
    result = ``
   

    if (playerSelection == computerSelection) {
        alert("Tie!")
        result = "Tie!"
        console.log(result)
        return result
    }
    if(playerSelection == 'rock' && computerSelection == 'paper') {
        alert("You lose!")
        result = `You lose! ${computerSelection} beats ${playerSelection}`
        console.log(result)
        compScore++
        console.log(compScore)
        return result
    }
    if(playerSelection == 'scizzors' && computerSelection == 'paper') {
        alert("You win!")
        result = `You win! ${playerSelection} beats ${computerSelection}`
        console.log(result)
        playerScore++
        console.log(playerScore)
        return result
    }
    if(playerSelection == 'paper' && computerSelection == 'rock') {
        alert("You win!")
        result = `You win! ${playerSelection} beats ${computerSelection}`
        console.log(result)
        playerScore++
        console.log(playerScore)
        return result
    }
    if(playerSelection == 'scizzors' && computerSelection == 'rock') {
        alert("You lose!")
        result = `You lose! ${computerSelection} beats ${playerSelection}`
        console.log(result)
        compScore++
        console.log(compScore)
        return result
    }
    if(playerSelection == 'rock' && computerSelection == 'scizzors') {
        alert("You win!")
        result = `You win! ${playerSelection} beats ${computerSelection}`
        console.log(result)
        playerScore++
        console.log(playerScore)
        return result
    }
    if(playerSelection == 'paper' && computerSelection == 'scizzors') {
        alert("You lose!")
        result = `You lose! ${computerSelection} beats ${playerSelection}`
        console.log(result)
        compScore++
        console.log(compScore)
        return result
    }
    
}


function game() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
    if (playerScore > compScore) {
        alert("Player wins!!")
    } else {
        alert("Computer wins, you suck!")
    }

}

game()