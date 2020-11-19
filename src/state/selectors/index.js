export const isSessionCompletedSelector = state => {
  if(state.prompt ) return state.index === state.prompt.length
}

export const errorsSelector = state => state.errors

export const startTimeSelector = state => state.time

export const cpmSelector = state => {
  const { startTime, lastCharAt, index } = state

  if(lastCharAt === null) return 0

  const minutes = (lastCharAt - startTime) / 60000
  return index / minutes
}

export const charSelector = state => state.char
