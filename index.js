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
    //playerSelection = playerSelection;
   // playerSelection = prompt()
    //playerSelection = playerSelection.toLowerCase()
    //result = ``
    let result = ``;
    let rpsResult = document.querySelector('#result')
    let par = document.createElement('p')
    let num = document.createElement('p')
    let pScore = document.querySelector('.player')
    let cScore = document.querySelector('.computer')

    if (playerSelection == computerSelection) {
        alert("Tie!")
        par.textContent = "Tie!"
        console.log(result)
        //return result
        rpsResult.appendChild(par)
    }
    if(playerSelection == 'rock' && computerSelection == 'paper') {
        alert("You lose!")
        par.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
        //console.log(result)
        compScore++
        num.textContent = compScore
        console.log(compScore)
        //return result
        rpsResult.appendChild(par)
        cScore.appendChild(num)
        
    }
    if(playerSelection == 'scizzors' && computerSelection == 'paper') {
        alert("You win!")
        par.textContent = `You win! ${playerSelection} beats ${computerSelection}`
        console.log(result)
        playerScore++
        num.textContent = playerScore
        console.log(playerScore)
        rpsResult.appendChild(par)
        //return result
        pScore.appendChild(num)

    }
    if(playerSelection == 'paper' && computerSelection == 'rock') {
        alert("You win!")
        par.textContent = `You win! ${playerSelection} beats ${computerSelection}`
        console.log(result)
        playerScore++
        num.textContent = playerScore
        console.log(playerScore)
        rpsResult.appendChild(par)
        pScore.appendChild(num)

      //  return result
    }
    if(playerSelection == 'scizzors' && computerSelection == 'rock') {
        alert("You lose!")
        par.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
        console.log(result)
        compScore++
        num.textContent = compScore
        console.log(compScore)
       // return result
       rpsResult.appendChild(par)
       cScore.appendChild(num)

    }
    if(playerSelection == 'rock' && computerSelection == 'scizzors') {
        alert("You win!")
        par.textContent = `You win! ${playerSelection} beats ${computerSelection}`
        //console.log(result)
        playerScore++
        num.textContent = playerScore
        console.log(playerScore)
        rpsResult.appendChild(par)
        pScore.appendChild(num)

        //return result
        //console.log(result)
        //rpsResult.appendChild(result)

    }
    if(playerSelection == 'paper' && computerSelection == 'scizzors') {
        alert("You lose!")
        par.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
        console.log(result)
        compScore++
        num.textContent = compScore
        console.log(compScore)
        rpsResult.appendChild(par)
        cScore.appendChild(num)
        //return result
    }
}

function game() {
    // for (let i = 0; i < 5; i++) {
    //     playRound()
    // }
    // if (playerScore > compScore) {
    //     alert("Player wins!!")
    // } else {
    //     alert("Computer wins, you suck!")
    // }

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
    // let rock = document.querySelector('rock')
    // let paper = document.querySelector('paper')
    // let scizzors = document.querySelector('scizzors')

}

game()



