import {NEW_WORD} from '../actions/game'

const initialState = 'default'.split('')

export default function (state = initialState, {type, payload} = {}) {
  switch(type){
    case NEW_WORD:
       return payload

    default: return state
  }
}