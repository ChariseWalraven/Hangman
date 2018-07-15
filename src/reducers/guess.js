import { UPDATE_GUESS, RESET_GUESS, UPDATE_DISPLAY } from "../actions/game";

const calculateGuesses = (hard = false) => {
  if (hard) return 7;
  return 11;
};

const initialState = {
  hard: false,
  guessesRemaining: calculateGuesses(this.hard),
  guess: [],
  display: []
};

export default function(state = initialState, { type, payload } = {}) {
  switch (type) {
    case UPDATE_GUESS:
      // filtered through guess and compared it to the display and then
      // somehow => some => some _ _ _
      // compare state.display to payload.display and return a new display with all of the letters.
      return {
        guessesRemaining: payload.guessesRemaining,
        guess: payload.guess,
        display: payload.display
      };

    case UPDATE_DISPLAY:
      // pass all the guesses here? should fix?
      return {
        guessesRemaining: state.guessesRemaining,
        guess: state.guess,
        display: payload // some // _ _ _ h _
      };

    case RESET_GUESS:
      return initialState;
    default:
      return state;
  }
}
