import React from 'react'
import { Button } from '@material-ui/core'

const KeyBoard = ({ ...props }) => {
  const { qwerty, handleClick } = props
  const qwertyKeys = [["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"], ["a", "s", "d", "f", "g", "h", "j", "k", "l"], ["z", "x", "c", "v", "b", "n", "m"]]
  if (qwerty) {
    return (
      <div>
        <div>
          {
            qwertyKeys[0].map((k, i) => <Button key={'button-0-'+ i} onClick={_ => handleClick(k)}>{k}</Button>)
          }
        </div>
        <div>
          {
            qwertyKeys[1].map((k, i) => <Button key={'button-1-'+ i} onClick={_ => handleClick(k)}>{k}</Button>)
          }
        </div>
        <div>
          {
            qwertyKeys[2].map((k, i) => <Button key={'button-2-'+ i} onClick={_ => handleClick(k)}>{k}</Button>)
          }
        </div>
      </div >
    )

  }
  else return (<p>Keyboard not recognized</p>)
}

export default KeyBoard

