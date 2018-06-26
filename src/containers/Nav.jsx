import React from 'react'
import { Typography } from '@material-ui/core'
import './Header.css'

// top navigation
const title = (
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
    <div id='Header'>{title}</div>
  )
}


export default Nav;