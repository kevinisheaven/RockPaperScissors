function computerPlay(computerSelection) {
 let rockPaperScssrs = ['rock', 'paper', 'scizzors']
 computerSelection = rockPaperScssrs[Math.floor(Math.random() * rockPaperScssrs.length)]
 //computerSelection = Math.floor(Math.random() * rockPaperScssrs.length)
console.log(computerSelection)
}


computerPlay()