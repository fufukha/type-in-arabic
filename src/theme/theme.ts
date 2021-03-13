import { createMuiTheme, Theme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary : {
      main: '#7AC70D'
    },
    secondary: {
      main: '#C70DA9'
    },
    yellow: {
      main: '#F9B113'
    },
    blue: {
      main: '#18BAED'
    },
    teal: {
      main: '#0DA6C7'
    },
    red: {
      main: '#E21313'
    },
    orange: {
      main: '#E9770F'
    }
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h2',
        h2: 'h3',
        h3: 'h4',
        h4: 'h5',
        h5: 'h6',
        h6: 'h6',
      },
    },
  },
})

export default theme