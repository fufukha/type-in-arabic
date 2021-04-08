import React, { ReactElement } from 'react'
import { render as rtlRender, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore, Store } from 'redux'
import store from './store'
import { LevelState } from '../src/state/level-state'
import { AppActions } from './state/actions/action-types'
import appReducer from '../src/state/reducers'

interface RenderArg {
  initialState: LevelState, 
  store?: Store<LevelState, AppActions>
  renderOptions?: RenderOptions
}

const render = (ui: ReactElement, {
  initialState,
  store = createStore(appReducer, initialState),
  ...renderOptions
}: RenderArg) => {
  const Wrapper: React.FC = ({ children }) => {
    return (
      <Provider store={store}>
        {children}
      </Provider>
    )
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }
