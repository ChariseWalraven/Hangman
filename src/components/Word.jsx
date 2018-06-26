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
          {display.length !== 0 ?
            display.join(" ") : Array.from(word)
              .map(l => l === " " ? l = " " : l = "_").join('')
          }
        </span>
        <NewWord handleClick={handleClick} />
      </Typography>
    ) : null
  )
}


export default Word