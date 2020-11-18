const initialState = {
  startTime: null,
  errors: 0,
  prompt: null,
  index: 0,
  lastCharAt: null
}

const isCharMatch = (char, index, prompt) => char === prompt[index]
const isEndSession = (index, prompt) => index === prompt.length

const appReducer = (state=initialState, action) => {
  const { type, payload } = action
  const { index, errors, prompt, lastCharAt } = state

  switch(type) {
    case 'START_SESSION':
      return {
        ...state,
        prompt: payload.prompt,
        startTime: payload.time
      }

    case 'INPUT_CHAR': {
      const isMatching = isCharMatch(payload.char, index, prompt)

      return {
        ...state,
        index: isMatching ? index + 1 : index,
        errors: isMatching || isEndSession(index, prompt) ? errors : errors + 1,
        lastCharAt: isMatching ? payload.timestamp : lastCharAt
      }
    }

    default:
      return state
  }
}

export default appReducer
