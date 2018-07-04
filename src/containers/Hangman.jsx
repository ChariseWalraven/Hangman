import React, { Component } from 'react'
import { connect } from 'react-redux'
import { guess, updateGuess, resetGuess, newWord, resetState, deleteLastLetter } from '../actions/game'
import Game from '../lib/game'
import { Typography } from '@material-ui/core'
import Word from '../components/Word'
import KeyBoard from './KeyBoard'


class Hangman extends Component {
  
  componentWillMount() {
    this.props.newWord()
  }

  handleKeyboardClick = (letter) => {
    // guess with the letter
    if (this.props.guessesRemaining > 0) {
      let wrong = this.props.guessesRemaining - Game.wrongGuessCount(this.props.word, letter)
      this.props.updateGuess(wrong,this.state.history)
    }
    else {
      // reset word and guesscount
      this.props.resetGuess()
      this.props.newWord()
    }
  }

  handleClick = () => {
    // trigger notification
    this.props.newWord()

  }

  render() {
    return (
      <div className='Hangman'>
        <Typography variant='display1' component='div'>
          Your guess:
          {" " + this.props.userGuess}
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
        <Typography component='div'>
          <KeyBoard handleClick={this.handleKeyboardClick} qwerty={true} />
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
