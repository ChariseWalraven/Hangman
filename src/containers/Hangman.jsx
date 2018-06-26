import React, { Component } from 'react'
import { connect } from 'react-redux'
import { guess, updateGuess, resetGuess, newWord, resetState, deleteLastLetter } from '../actions/game'
import Game from '../lib/game'
import { Typography } from '@material-ui/core'
import Word from '../components/Word'

class Hangman extends Component {
  componentWillMount() {
    this.props.newWord()
    let history = [];
    let guess = [];
    document.addEventListener('keydown', e => {
      const yes = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ'.split('')
      // const no = [16, 192, 9, 20]
      if (e.keyCode === 8) {
        // dispatch action to remove last bit of guess
        guess = guess.slice(0, guess.length - 1)
        this.props.deleteLastLetter()
      }
      if (yes.includes(e.key)) {
        //if guess is in the array, push the guess, and the history
        guess.push(e.key)
        history.push(e.key)
      }
      if (e.key === 'Enter') {
        if (this.props.guessesRemaining > 0) {
          this.handleSubmit(guess, history)
        }
        else {
          //reset game
        }
      }
    })
  }

  handleSubmit = (guess, history) => {
    // update store with wrong guess count
    if (this.props.guessesRemaining > 0) {
      let wrong = this.props.guessesRemaining - Game.wrongGuessCount(this.props.word, guess)
      this.props.updateGuess(wrong, history)
    }
    else {
      // reset guesses remaining and get a new letter
      this.props.resetGuess()
      console.log(this.props.userGuess)
    }

  }

  handleClick = () => {
    // trigger notification
    this.props.newWord()

  }

  render() {
    return (
      <div className='Hangman'>
        <Typography variant='display1'>
          Hit Enter to Submit your guess!
        </Typography>
        <Typography variant='display1'>
          Your guess:
          {" " + this.props.userGuess.join("")}
        </Typography>
        {
          this.props.display !== null ?
            <Word props={this.props} handleClick={this.handleClick} />
            : null
        }
        <Typography variant='display1' component='div'>
          Guesses remaining:
          <Typography component='span' variant='display1' color={'error'}>
            {this.props.guessesRemaining}
          </Typography>
        </Typography>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  guessesRemaining: state.guess.guessesRemaining,
  word: state.guess.word,
  userGuess: state.guess.guess,
  currentLetter: state.guess.currentLetter,
  display: state.guess.display ? state.guess.display : null
})

export default connect(mapStateToProps, {
  guess, updateGuess, resetGuess, newWord, resetState, deleteLastLetter
})(Hangman)
