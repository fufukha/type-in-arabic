import { ActionCreator } from 'redux'
import {
  START_SESSION,
  INPUT_CHAR,
  StartSessionAction,
  InputCharAction,
} from './action-types'
import * as data from '../../mocks/levels.json'

export const startSession: ActionCreator<StartSessionAction> = () => {
  return {
    type: START_SESSION,
    payload: {
      levelsData: data.levels
    },
  }
}

export const inputChar: ActionCreator<InputCharAction> = (
  char: string,
  timestamp: number & Date
) => {
  return {
    type: INPUT_CHAR,
    payload: {
      char,
      timestamp,
    },
  }
}
