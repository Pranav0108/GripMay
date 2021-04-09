class Hangman{
    constructor(word,remainingGuesses){
        this.word=word.toLowerCase().split("")
        this.remainingGuesses=remainingGuesses
        this.guessedLetters=[]
        this.status='playing'
    }
    calcStatus(){
        const finished=this.word.every((letter)=> this.guessedLetters.includes(letter)|| letter===" ")
        if(this.remainingGuesses===0){
            this.status='failed'
        }else if(finished){
            this.status='finished'
        }else {
            this.status='playing'
        }
    }
    get statusMessage(){
        if(this.status==='playing'){
            return `Guesses left ${this.remainingGuesses}`
        }
        else if(this.status==='failed'){
            return `nice try! the Word was "${this.word.join('')}"`
        }else{
            return `Great work! you guessed the work`
        }
    }
    get puzzle(){
        let puzzle=""
        this.word.forEach((letter) => {
            if(this.guessedLetters.includes(letter)|| letter===' '){
                puzzle+=letter
            }
            else{
                puzzle+="*"
            }
        });
        return puzzle
    }
    makeGuess(c){
        c=c.toLowerCase()
        const isUnique=!this.guessedLetters.includes(c)
        const isBadGuess=!this.word.includes(c)
        if(this.status!=='playing'){
            return 
        }
        if(isUnique){
            this.guessedLetters.push(c)
        }
        if(isUnique && isBadGuess){
            this.remainingGuesses--
        }
        this.calcStatus()
    }
}
