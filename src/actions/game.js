import Game from '../lib/game'
// import * as Game.randomWord from 'random-words'

export const GUESS = 'GUESS'
export const UPDATE_GUESS = 'UPDATE_GUESS'
export const UPDATE_GUESS_COUNT = 'UPDATE_GUESS_COUNT'
export const RESET_GUESS = 'RESET_GUESS'
export const RESET_STATE = 'RESET_STATE'
export const NEW_WORD = 'NEW_WORD'
export const DELETE_LAST_LETTER = 'DELETE_LAST_LETTER'

export const newWord = () => (dispatch, getState) => {
  const state = getState()
  const newWord = Game.randomWord()
  dispatch({
    type: NEW_WORD,
    payload: { word: newWord, display: state.display }
  })
}

export const updateGuessCount = (guess) => (dispatch, getState) => {
  const state = getState().guess

  // calculate guesses remaining using current guess(i.e. when the user hits enter)
  // dispatch guesses remaining after calculation

}

export const updateDisplay = (guess) => (dispatch, getState) => {
  const state = getState().guess
  const display = Game.showGuess(state.word, guess) // pass all the guesses here? should fix?
  // filtered through guess and compared it to the display
  // TODO: Split up update guess so it doesn't handle the guesses remaining too

  /* 
    state = {
      word: [],
      guess: [],
      guessesRemaining: number,
      display: [],
      currentLetter: '' => not used
    }
  */

  dispatch({
    type: UPDATE_GUESS,
    payload: { display, guess: state.guess, guessesRemaining: state.guessesRemaining }
  })
}

// split up actions
// guess array 

export const updateGuess = (guessesRemaining, guess) => (dispatch, getState) => {
  const state = getState().guess
  const stillInPlay = guessesRemaining > 0
  if (stillInPlay) {
    dispatch({
      type: UPDATE_GUESS,
      payload: { guessesRemaining, guess, display: state.display }
    })
    dispatch(updateDisplay(guess))
  } else {
    dispatch({
      type: RESET_GUESS
    })
    dispatch(newWord())

  }
}

// reset guesses remaining and get a new letter


export const resetGuess = () => (dispatch) => dispatch({ type: RESET_GUESS })

export const resetState = () => (dispatch) => dispatch({ type: RESET_STATE })

export const deleteLastLetter = () => (dispatch, getState) => {
  const state = getState().guess
  const guess = state.guess.slice(0, state.guess.length - 1)
  console.log(guess.slice(0, guess.length - 1))
  dispatch({
    type: UPDATE_GUESS,
    payload: {
      guess,
      word: state.word,
      display: state.display,
      guessesRemaining: state.guessesRemaining
    }
  })
}

export const guess = (word, guesses) => {
  const [allGuesses, solution] = Game.next(word, guesses)
  return {
    type: GUESS,
    payload: {
      allGuesses,
      solution
    }
  }
}


