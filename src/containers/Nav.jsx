import React from 'react'
import { Typography, Paper } from '@material-ui/core'
import './Header.css'

const children = (
  <div>
    <Typography
      align='center'
      color='error'
      variant='display4'>
      Hangman
    </Typography>
  </div>
)

const Nav = () => {
  return (
    <div id='Header'>{children}</div>
  )
}


export default Nav;