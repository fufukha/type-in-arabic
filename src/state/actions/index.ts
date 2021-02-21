import { ActionCreator } from 'redux'
import {
  START_SESSION,
  INPUT_CHAR,
  NEXT_LEVEL,
  StartSessionAction,
  InputCharAction,
  NextLevelAction,
} from './action-types'
import * as data from '../../mocks/levels.json'

export const startSession: ActionCreator<StartSessionAction> = (
  level: number
) => {
  return {
    type: START_SESSION,
    payload: {
      level,
      levelsData: data.levels,
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

export const nextLevel: ActionCreator<NextLevelAction> = () => {
  return {
    type: NEXT_LEVEL,
  }
}
