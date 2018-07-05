import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateGuess, resetGuess, newWord } from '../actions/game'
import Game from '../lib/game'
import { Typography } from '@material-ui/core'
import Word from '../components/Word'
import KeyBoard from './KeyBoard'


class Hangman extends Component {
  state = {
    history: [],
    inPlay: this.props.guessesRemaining > 0,
  }

  componentWillMount() {
    this.props.newWord()
  }

  handleKeyboardClick = async (letter) => {
    // guess with the letter
    if (this.state.inPlay) {
      await this.setState({
        history: this.state.history.concat([letter])
      })
      let wrong = this.props.guessesRemaining - Game.wrongGuessCount(this.props.word, letter)
      this.props.updateGuess(wrong, this.state.history)
    }
    else {
      // reset word, guesscount, display
      await this.setState({
        history: [],
      })
    }
  }

  handleClick = async () => {
    // trigger notification
    await this.setState({
      history: [],
    })
    this.props.newWord()
  }

  isWinner() {
    // eslint-disable-next-line
    return this.props.display.join('') == this.props.word.join('');
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
            : console.log('display is null')
        }
        <Typography variant='display1' component='div'>
          {
            this.state.inPlay ?
              this.isWinner() ?
                <div>You Won!</div>
              : null
            : null
          }
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
  word: state.word,
  userGuess: state.guess.guess,
  currentLetter: state.guess.currentLetter,
  display: state.guess.display ? state.guess.display : null
})

export default connect(mapStateToProps, {
  updateGuess, resetGuess, newWord
})(Hangman)
