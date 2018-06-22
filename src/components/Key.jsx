import React, { Component } from 'react'
import { connect } from 'react-redux'
import { guess, updateGuess, resetGuess, newWord, resetState, deleteLastLetter } from '../actions/game'
import Game from '../lib/game'
import { Typography, Button } from '@material-ui/core'

// single key in the keyboard
// connected to redux

const Key = ({...props}) => {
  return (
    <Typography component='div'>
      <Button>{props.letter}</Button>
    </Typography>
  )
}


export default Key