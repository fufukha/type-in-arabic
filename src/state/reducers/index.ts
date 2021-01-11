import { Reducer } from 'redux';
import { initialLevelState, LevelState } from '../level-state'
import { START_SESSION, INPUT_CHAR, StartSessionAction, InputCharAction, AppActions } from '../actions/action-types'

const isCharMatch = (char: string, index: number, prompt: string) => char === prompt[index]
const isEndSession = (index: number, prompt: string) => index === prompt.length

const appReducer: Reducer<LevelState, AppActions> = (
  state =initialLevelState,
  action: AppActions
) => {
  const { type } = action
  const { startTime, index, errors, prompt, lastCharAt } = state

  switch(type) {
    case START_SESSION:
      const { payload } = action as StartSessionAction
      return {
        ...state,
        prompt: payload.prompt
      }

      case INPUT_CHAR: {
        const { payload } = action as InputCharAction
        const isMatching = isCharMatch(payload.char, index, prompt!)

        return {
          ...state,
          index: isMatching ? index + 1 : index,
          errors: isMatching || isEndSession(index, prompt!) ? errors : errors + 1,
          lastCharAt: isMatching ? payload.timestamp : lastCharAt,
          startTime: startTime === null ? payload.timestamp! : startTime,
          char: payload.char
        }
      }
  }
}

export default appReducer
