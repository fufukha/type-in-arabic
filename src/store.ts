import { applyMiddleware, createStore,} from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import appReducer from './state/reducers/index'
import { initialLevelState }  from './state/level-state'

const store = createStore(
  appReducer,
  initialLevelState,
  composeWithDevTools(
    applyMiddleware(logger),
  )
)

export default store
