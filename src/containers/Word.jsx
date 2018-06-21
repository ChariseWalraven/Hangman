import React from 'react'
import { Typography, Snackbar, Tooltip } from '@material-ui/core'
import AutorenewIcon from '@material-ui/icons/Autorenew'

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
              .map(l => l = "_").join('')
          }
        </span>
        <Tooltip title='New Word'>
          <AutorenewIcon onClick={() => handleClick()} />
        </Tooltip>
      </Typography>
    ) : null
  )
}


export default Word