export const startSession = (prompt) => {
  return {
    type: 'START_SESSION',
    payload: {
      time: new Date().getTime(),
      prompt
    }
  }
}

export const inputChar = (char) => {
  return {
    type: 'INPUT_CHAR',
    payload: {
      char
    }
  }
}
