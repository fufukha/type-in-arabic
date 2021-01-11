import { LevelState } from '../level-state'

export const isSessionCompletedSelector = (state: LevelState) => {
  if(state.prompt ) return state.index === state.prompt.length
}

export const promptSelector = (state: LevelState) => state.prompt

export const errorsSelector = (state: LevelState) => state.errors

export const startTimeSelector = (state: LevelState) => state.startTime

export const cpmSelector = (state: LevelState) => {
  const { startTime, lastCharAt, index } = state

  if(lastCharAt === null) return 0

  const minutes = (lastCharAt! - startTime!) / 60000
  return index / minutes
}

export const charSelector = (state: LevelState) => state.char

export const indexSelector = (state: LevelState) => state.index
