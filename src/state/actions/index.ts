import { ActionCreator } from 'redux'
import {
  START_SESSION,
  INPUT_CHAR,
  StartSessionAction,
  InputCharAction,
} from './action-types'

export const startSession: ActionCreator<StartSessionAction> = () => {
  const prompt = 'نتنت'
  return {
    type: START_SESSION,
    payload: {
      prompt,
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
