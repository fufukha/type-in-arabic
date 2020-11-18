export const isSessionCompletedSelector = state => {
  return state && (state.index === state.prompt.length)
}
