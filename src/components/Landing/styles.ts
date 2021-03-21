import { makeStyles } from '@material-ui/core'
import { CSSProperties } from 'react'

export const useStyles = makeStyles(() => ({
  root: {
    minHeight: '800px',
  },
  wrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    '& h1 span': {
      display: 'block',
    },
  },
}))

export const container: CSSProperties = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
}
