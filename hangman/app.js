const game1=new Hangman('car part',2)
const puzzleEl=document.querySelector('#puzzle')
const guessEl=document.querySelector('#guesses')

window.addEventListener('keypress',function(e){
    const guess=String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent=game1.puzzle
    guessEl.textContent=game1.statusMessage
})

puzzleEl.textContent=game1.puzzle
guessEl.textContent=game1.statusMessage