const Game = {
  words: ['today', 'tomorrow', 'yesterday', 'future tense', 'current tense', 'english', 'spanish', 'latin', 'french'],

// returns the number of wrong guesses
  wrongGuessCount: (word, guesses) => {
    if (typeof guesses === 'string') {
      return [].concat(guesses)
        .filter(letter => word.indexOf(letter) === -1)
        .length
    }
    else return guesses
      .filter(letter => word.indexOf(letter) === -1)
      .length
  },

// shows the guess as an array with underscores
  showGuess: (word, guesses) => {
    let result = []
    word.filter((letter) => {
      if (guesses.indexOf(letter) > -1)
        return result.push(letter)
      else return result.push("_")
    })
    return result
  },

  // determines if the player has won
  isWinner: (word, guesses) => {
    let clue = this.showGuess(word, guesses);
    if (clue.indexOf("_") > -1) {
      return false;
    } else {
      return true;
    }
  },

// I'm not sure what this one does anymore
  next: (word, guesses) => {
    let guessCount = this.wrongGuessCount(word, guesses)
    let allGuesses = Object.freeze(guesses)
    let solution = Object.freeze(this.showGuess(word, guesses))

    if (this.isWinner(word, guesses) === false && guessCount !== 7) {
      guessCount += this.wrongGuessCount(word, guesses)
    }

    if (this.isWinner(word, guesses)) console.log('Yay, you won!')

    return [allGuesses, guessCount, solution]
  },

  // gets a random word
  randomWord: () => {
    const index = Math.floor(Math.random() * Game.words.length)
    return Array.from(Game.words[index])
  }
}


export default Game