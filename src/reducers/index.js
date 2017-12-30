import { combineReducers } from 'redux'
import display from './display.js'
import settings from './settings.js'
import board from './board.js'
import current from './current.js'

const appReducer = combineReducers({
  display,
  settings,
  board,
  current
})

export default appReducer
