import React from 'react'
import { Typography } from '@material-ui/core'
import NewWord from '../components/NewWord'

const Word = ({ ...props }) => {
  const { display, word } = props.props
  const { handleClick } = props
  return (
    display ? (
      <Typography
        variant='display1' component='div'>
        <span>
          { //check if display is a non-empty array
            Array.isArray(display)  && display[1] ?
            // if so, join the underscores with spaces in between
              display.join(""): 
            // if not, use word to create an array and convert it to the correct display
            Array.from(word)
              .map(l => l === " " ? l = " " : l = "_").join('')
          }
        </span>
        <NewWord handleClick={handleClick} />
      </Typography>
    ) : null
  )
}


export default Word