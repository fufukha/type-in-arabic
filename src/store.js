import { compose, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import appReducer from './state/reducers'

export default createStore(
    appReducer,
    compose(
        applyMiddleware(logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
