import { Action } from 'redux'

export const START_SESSION = 'STATE_SESSION'
export const INPUT_CHAR = 'INPUT_CHAR'

export interface StartSessionAction extends Action {
  type: typeof START_SESSION
  payload: {
    levelsData: string[]
  }
}

export interface InputCharAction extends Action {
  type: typeof INPUT_CHAR
  payload: {
    char: string
    timestamp: Date & number
  }
}

export type AppActions = StartSessionAction | InputCharAction
