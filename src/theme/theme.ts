import { ThemeOptions } from '@material-ui/core/styles'

export const landingTheme: ThemeOptions = {
  palette: {
    primary: {
      main: '#C70DA9',
    },
    secondary: {
      main: '#7AC70D',
    },
    success: {
      main: '#7AC70D',
    },
    warning: {
      main: '#F9B113',
    },
    background: {
      default: '#7AC70D',
    },
    text: {
      primary: '#fff',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Amaranth, Roboto, sans serif',
      whiteSpace: 'pre-line',
    },
    h2: {
      fontFamily: 'Amaranth, Roboto, sans serif',
      fontSize: '4.572em',
      '@media (max-width: 960px)': {
        fontSize: '3em',
      },
      '@media (max-width: 600px)': {
        fontSize: '2em',
      },
      whiteSpace: 'pre-line',
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
        width: '100%',
        maxWidth: '290px',
        fontSize: '24px',
        '@media (max-width: 600px)': {
          fontSize: '0.8em',
        },
        fontWeight: 900,
      },
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
}

export const levelsTheme: ThemeOptions = {
  palette: {
    primary: {
      main: '#E5E7EC',
    },
    secondary: {
      main: '#F9B113',
    },
    purple: {
      main: '#C70DA9',
    },
    blue: {
      main: '#18BAED',
    },
    teal: {
      main: '#0DA6C7',
    },
    red: {
      main: '#E21313',
    },
    orange: {
      main: '#E9770F',
    },
    success: {
      main: '#7AC70D',
    },
    warning: {
      main: '#F9B113',
    },
    text: {
      primary: '#000',
    },
    background: {
      paper: '#fff',
      default: '#F9B113',
    },
  },
  typography: {
    h5: {
      fontSize: '1.5em',
      textTransform: 'uppercase',
      fontWeight: 900,
      color: '#fff',
    },
    h6: {
      fontFamily: 'Markazi Text, serif',
      fontSize: '3.5em',
    },
  },
  overrides: {
    MuiContainer: {
      maxWidthMd: {
        '@media (min-width: 960px)': {
          maxWidth: '90%',
          minWidth: '1039px',
        },
        maxWidth: '90%',
        minWidth: '1039px',
      },
    },
    MuiDialogTitle: {
      root: {
        textAlign: 'center',
      },
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: '1em',
      },
    },
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
      },
    },
  },
}

export const statSummaryTheme: ThemeOptions = {
  palette: {
    primary: {
      main: '#7AC70D',
    },
    secondary: {
      main: '#F9B113',
    },
    success: {
      main: '#7AC70D',
    },
    warning: {
      main: '#F9B113',
    },
    background: {
      default: '#18BAED',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Amaranth, Roboto, sans serif',
    },
    h2: {
      fontFamily: 'Amaranth, Roboto, sans serif',
    },
    h3: {
      fontFamily: 'Amaranth, Roboto, sans serif',
    },
    h4: {
      fontFamily: 'Amaranth, Roboto, sans serif',
    },
    h5: {
      fontFamily: 'Amaranth, Roboto, sans serif',
    },
    h6: {
      fontFamily: 'Amaranth, Roboto, sans serif',
    },
    caption: {
      color: '#fff',
      textTransform: 'uppercase',
      fontWeight: 700,
    },
    subtitle2: {
      color: '#fff',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 10,
  },
  overrides: {
    MuiContainer: {
      maxWidthXs: {
        width: '420px',
      },
    },
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
        fontSize: '0.875rem',
      },
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
}
