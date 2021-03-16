import { createMuiTheme, Theme } from '@material-ui/core/styles'

const theme: Theme = createMuiTheme({
  palette: {
    primary : {
      main: '#C70DA9'
    },
    secondary: {
      main: '#7AC70D'
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
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '10px',
        paddingLeft: '30px',
        paddingRight: '30px',
      },
      contained: {
        boxShadow: 'none',
      },
      containedPrimary: {
        width: '290px',
        fontSize: '24px',
        fontWeight: 900,
      }
    },
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