import { StrictMode } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from './theme/theme'

render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
