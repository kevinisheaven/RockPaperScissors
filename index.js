function computerPlay(computerSelection) {
 let rockPaperScssrs = ['rock', 'paper', 'scizzors']
 computerSelection = rockPaperScssrs[Math.floor(Math.random() * rockPaperScssrs.length)]
 //computerSelection = Math.floor(Math.random() * rockPaperScssrs.length)
console.log(computerSelection)
return computerSelection
}
let compScore = 0
let playerScore = 0
let playerSelection;

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay()
    let result = ``;
    let rpsResult = document.querySelector('#result')
    let par = document.createElement('p')
    let num = document.createElement('p')
    let pScore = document.querySelector('.player')
    let cScore = document.querySelector('.computer')

    if (playerSelection == computerSelection) {
        par.textContent = "Tie!"
        rpsResult.appendChild(par)
    }
    if(playerSelection == 'rock' && computerSelection == 'paper') {
        par.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
        compScore++
        num.textContent = compScore
        console.log(compScore)
        rpsResult.appendChild(par)
        cScore.appendChild(num)
        
    }
    if(playerSelection == 'scizzors' && computerSelection == 'paper') {
        par.textContent = `You win! ${playerSelection} beats ${computerSelection}`
        playerScore++
        num.textContent = playerScore
        console.log(playerScore)
        rpsResult.appendChild(par)
        pScore.appendChild(num)

    }
    if(playerSelection == 'paper' && computerSelection == 'rock') {
        par.textContent = `You win! ${playerSelection} beats ${computerSelection}`
        playerScore++
        num.textContent = playerScore
        console.log(playerScore)
        rpsResult.appendChild(par)
        pScore.appendChild(num)

    }
    if(playerSelection == 'scizzors' && computerSelection == 'rock') {
        par.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
        compScore++
        num.textContent = compScore
        console.log(compScore)
       rpsResult.appendChild(par)
       cScore.appendChild(num)

    }
    if(playerSelection == 'rock' && computerSelection == 'scizzors') {
        par.textContent = `You win! ${playerSelection} beats ${computerSelection}`
        playerScore++
        num.textContent = playerScore
        console.log(playerScore)
        rpsResult.appendChild(par)
        pScore.appendChild(num)

    }
    if(playerSelection == 'paper' && computerSelection == 'scizzors') {
        par.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
        console.log(result)
        compScore++
        num.textContent = compScore
        console.log(compScore)
        rpsResult.appendChild(par)
        cScore.appendChild(num)
        //return result
    }
    if(playerScore == 5) {
        alert("Player wins, down with the machines!!")
        location.reload()
    }
    if (compScore == 5){
        alert("Computer wins, you suck!")
        location.reload()
    }
}

function game() {
const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    if (button.id == 'rock' || button.id == 'paper' || button.id == 'scizzors') {
        playerSelection = button.id
        console.log(button.id)
        
        playRound(playerSelection)
    }
  });
});
    
}

game()



