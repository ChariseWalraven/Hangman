import React from 'react'
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