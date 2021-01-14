import { applyMiddleware, createStore, Store } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import appReducer from './state/reducers/index'
import { LevelState } from './state/level-state'
import { AppActions } from './state/actions/action-types'

const store: Store<LevelState, AppActions> = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(logger))
)

export default store
