import { makeStyles } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles'
import { CSSProperties } from 'react'

export const useStyles = (status: Boolean, theme: Theme) =>
  makeStyles(() => ({
    card: {
      width: '100%',
    },
    wrapper: {
      paddingTop: 0,
      paddingRight: 0,
      paddingLeft: 0,
      width: '100%',
    },
    statMessage: {
      padding: 16,
      height: '197px',
      background: status
        ? theme.palette.success.main
        : theme.palette.warning.main,
      '& svg': {
        marginBottom: '16px',
      },
    },
    statistics: {
      margin: '20px 0 20px 0',
    },
    badge: {
      color: theme.palette.success.main,
      '& > svg': {
        marginTop: '32px',
      },
    },
    buttonWrapper: {
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '& button:first-child': {
        marginBottom: '16px',
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
