const Game = {
  words: {
    default: [
      "today",
      "tomorrow",
      "yesterday",
      "german",
      "english",
      "spanish",
      "latin",
      "french",
      "marine",
      "fish",
      "frog",
      "elephant",
      "crocodile",
      "jump",
      "horse",
      "monkey",
      "hello",
      "world",
      "picture"
    ],
    difficult: [
      "apostrophe",
      "omnibus",
      "catastrophe",
      "ecstasy",
      "gymnasium",
      "Homer",
      "The Iliad",
      "cataclysm",
      "civilization",
      "plebian",
      "agora",
      "infinitesmal",
      "miniscule",
      "imperceptible",
      "gastronomical"
    ]
  },

  guessCount: {
    deafault: 11,
    difficult: 7
  },
  // returns the number of wrong guesses
  wrongGuessCount: (word, guesses) => {
    if (typeof guesses === "string") {
      return [].concat(guesses).filter(letter => word.indexOf(letter) === -1)
        .length;
    } else return guesses.filter(letter => word.indexOf(letter) === -1).length;
  },

  // shows the guess as an array with underscores
  showGuess: (word, guesses) => {
    let result = [];
    word.filter((letter, index) => {
      // if the guess contains the letter in question, add it to the array
      if (guesses.indexOf(letter) > -1) return result.push(letter);
      else if (letter === " ") return result.push(" ");
      else return result.push("_");
    });
    return result;
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

  // gets a random word
  randomWord: () => {
    const index = Math.floor(Math.random() * Game.words.default.length);
    return Array.from(Game.words.default[index]);
  }
};

export default Game;
