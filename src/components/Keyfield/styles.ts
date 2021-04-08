import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() => ({
  field: {
    display: 'flex',
    width: '100%',
    minWidth: '991.5px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 60px',
    marginBottom: '40px',
    '& span': {
      color: 'lightgrey',
      borderLeft: '1px black solid',
      animationName: 'cursor',
      animationDuration: '1.5s',
      animationIterationCount: 'infinite',
    },
  },
  '@keyframes cursor': {
    '0%,50%': { borderLeftColor: 'rgba(0, 0, 0, 1)' },
    '51%,100%': { borderLeftColor: 'rgba(0, 0, 0, 0)' },
  },
}))
