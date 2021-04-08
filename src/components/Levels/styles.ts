import { makeStyles } from '@material-ui/core'
import { CSSProperties } from 'react'

export const useStyles = makeStyles(() => ({
  statBar: {
    width: '50%',
    marginTop: '100px',
  },
}))

export const containerStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
}
