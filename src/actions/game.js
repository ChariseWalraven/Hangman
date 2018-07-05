import Game from '../lib/game'

export const UPDATE_GUESS = 'UPDATE_GUESS'
export const UPDATE_DISPLAY = 'UPDATE_DISPLAY'
export const UPDATE_GUESS_FAILED = 'UPDATE_GUESS_FAILED'
export const RESET_GUESS = 'RESET_GUESS'

export const NEW_WORD_FAILED = 'NEW_WORD_FAILED'
export const NEW_WORD = 'NEW_WORD'

export const newWord = () => (dispatch) => {
  const payload = Game.randomWord()
  dispatch({
    type: NEW_WORD,
    payload
  })
  dispatch({
    type: RESET_GUESS
  })
}

export const updateDisplay = (guess) => (dispatch, getState) => {
  const state = getState()
  const payload = Game.showGuess(state.word, guess) // pass all the guesses here? should fix?

  dispatch({
    type: UPDATE_DISPLAY,
    payload
  })
}
// update guess
export const updateGuess = (guessesRemaining, guess) => (dispatch, getState) => {
  // send guess to the reducer
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


