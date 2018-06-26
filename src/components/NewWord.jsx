import React from 'react'
import { Tooltip } from '@material-ui/core'
import AutorenewIcon from '@material-ui/icons/Autorenew'

// triggers a new word
const NewWord = ({...props}) => {
  const {handleClick} = props
  return(
    <Tooltip title='New Word'>
      <AutorenewIcon onClick={() => handleClick()} />
    </Tooltip>
  )
}

export default NewWord