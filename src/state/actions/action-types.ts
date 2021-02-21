import { Action } from 'redux'

export const START_SESSION = 'STATE_SESSION'
export const INPUT_CHAR = 'INPUT_CHAR'
export const NEXT_LEVEL = 'NEXT_LEVEL'

export interface StartSessionAction extends Action {
  type: typeof START_SESSION
  payload: {
    level: number
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

export interface NextLevelAction extends Action {
  type: typeof NEXT_LEVEL
}

export type AppActions = StartSessionAction | InputCharAction | NextLevelAction
