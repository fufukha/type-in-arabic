const initialState = {
  time: null,
  errors: 0,
  prompt: null,
  index: 0
}

const isCharMatch = (char, index, prompt) => char === prompt[index]
const isEndSession = (index, prompt) => index === prompt.length

const appReducer = (state=initialState, action) => {
  const { type, payload } = action
  const { index, errors, prompt } = state

  switch(type) {
    case 'START_SESSION':
      return {
        ...state,
        prompt: payload.prompt,
        time: payload.time
    }

    case 'INPUT_CHAR':
      return {
        ...state,
        index: isCharMatch(payload.char, index, prompt) ? index + 1 : index,
        errors: isCharMatch(payload.char, index, prompt) || isEndSession(index, prompt) ? errors : errors + 1
      }
  }
}

export default appReducer
