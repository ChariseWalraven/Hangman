import reducer from './guess'

const initialState = {
  guessesRemaining: 7,
  word: [],
  guess: [],
  currentLetter: '',
  display: []
}

describe('guess', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })
})