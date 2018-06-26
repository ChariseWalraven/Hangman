import Game from '../lib/game'

describe('Game', () => {
  describe('is an object', () => {
    expect(typeof Game).toBe("object")
  })
  describe('has a wrongGuessCount function', () => {
    expect(Game.wrongGuessCount).toBeDefined()
  })
  describe('has a randomWord function', () => {
    expect(Game.randomWord).toBeDefined()
    it('returns an array', () => {
      expect(Array.isArray(Game.randomWord())).toBe(true)
    })
    it('which is in the words array of the Game object', () => {
      expect(Game.words.includes(Game.randomWord().join(""))).toBe(true)
    })
  })
  describe('has a showGuess function', () => {
    expect(Game.showGuess).toBeDefined()
    describe('which returns an array', () => {
      const showGuess = Game.showGuess(['b','l','u','e'], 'l')
      expect(Array.isArray(showGuess)).toBe(true)
      it('with the right result', ()=> {
        expect(showGuess).toEqual(["_","l","_","_"])
      })
    })
  })
})