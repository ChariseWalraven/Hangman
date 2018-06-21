import { UPDATE_GUESS, RESET_GUESS, NEW_WORD, DELETE_LAST_LETTER } from '../actions/game'


const initialState = {
  guessesRemaining: 7,
  word: [],
  guess: [],
  currentLetter: '',
  display: []
}

export default function (state = initialState, { type, payload } = {}) {
  switch (type) {
    case UPDATE_GUESS:
      // filtered through guess and compared it to the display and then 
      // somehow => some => some _ _ _ 
      // compare state.display to payload.display and return a new display with all of the letters. 
      return {
        guessesRemaining: payload.guessesRemaining,
        word: state.word,
        guess: payload.guess,
        currentLetter: state.currentLetter,
        display: payload.display // some // _ _ _ h _ _ 
      }
    case RESET_GUESS:
      return initialState
    case NEW_WORD:
      return {
        guessesRemaining: state.guessesRemaining,
        word: payload.word,
        guess: state.guess,
        currentLetter: state.currentLetter,
        display: state.display
      }
    case DELETE_LAST_LETTER:
      return {
        guessesRemaining: state.guessesRemaining,
        word: state.word,
        guess: payload.guess,
        currentLetter: state.currentLetter,
        display: payload.display
      }
    default:
      return state
  }
}
