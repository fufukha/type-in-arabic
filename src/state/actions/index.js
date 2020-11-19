export const startSession = (prompt) => {
  return {
    type: 'START_SESSION',
    payload: {
      prompt
    }
  }
}

export const inputChar = (char, timestamp) => {
  return {
    type: 'INPUT_CHAR',
    payload: {
      char,
      timestamp
    }
  }
}
