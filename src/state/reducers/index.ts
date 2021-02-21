import { Reducer } from 'redux'
import { initialLevelState, LevelState } from '../level-state'
import {
  START_SESSION,
  INPUT_CHAR,
  NEXT_LEVEL,
  StartSessionAction,
  InputCharAction,
  AppActions,
} from '../actions/action-types'

const isCharMatch = (char: string, index: number, prompt: string) =>
  char === prompt[index]

const isEndSession = (index: number, prompt: string) => index === prompt.length

const appReducer: Reducer<LevelState, AppActions> = (
  state = initialLevelState,
  action: AppActions
) => {
  const { type } = action
  const { startTime, index, errors, level, levelsData, lastCharAt } = state
  let prompt = level !== null ? levelsData[level!] : undefined

  switch (type) {
    case START_SESSION:
      const { payload } = action as StartSessionAction
      const { level, levelsData } = payload
      return {
        ...initialLevelState,
        level,
        levelsData,
      }

    case INPUT_CHAR: {
      const { payload } = action as InputCharAction
      const { timestamp, char } = payload
      const isMatching = isCharMatch(char, index, prompt!)

      return {
        ...state,
        index: isMatching ? index + 1 : index,
        errors:
          isMatching || isEndSession(index, prompt!) ? errors : errors + 1,
        lastCharAt: isMatching ? timestamp : lastCharAt,
        startTime: startTime === null ? timestamp : startTime,
        char,
      }
    }

    case NEXT_LEVEL: {
      const { level, levelsData } = state
      const isLastLevel = level === levelsData.length - 1

      return {
        ...initialLevelState,
        levelsData,
        level: isLastLevel ? level : level! + 1,
      }
    }

    default:
      return state
  }
}

export default appReducer
