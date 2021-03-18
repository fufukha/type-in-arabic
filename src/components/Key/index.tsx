import { KeyData, KeySize, KeyAlignment, KeyZone } from './key-types'
import classnames from 'classnames'
import { Paper, makeStyles } from '@material-ui/core'

type KeyProps = {
  data: KeyData
}

const Key: React.FC<KeyProps> = ({ data }) => {
  const { size, align, value, lang, zone } = data
  const displayValue = (value === 'opt-left' || value === 'opt-right') ? '' : value

  const useStyles = makeStyles(({ palette, typography }) => ({
    key : {
      display: 'flex',
      margin: '1.5px',
      padding: '5px 10px',
      cursor: 'default',
      '&[lang="ar"]': {
        fontFamily: typography.h6.fontFamily,
        fontSize: '1.5em',
      },
      '&[lang="en"]': {
        fontSize: '1em',
      },
    },
    zone1: {
      background: palette.purple.main,
    },
    zone2: {
      background: palette.teal.main,
    },
    zone3: {
      background: palette.secondary.main,
    },
    zone4: {
      background: palette.red.main,
    },
    zone5: {
      background: palette.blue.main,
    },
    zone6: {
      background: palette.grey['100'],
    },
    zone7: {
      background: palette.grey['200']
    },
    sm: {
      gridColumn: 'auto / span 4',
    },
    med: {
      gridColumn: 'auto / span 6',
    },
    lg: {
      gridColumn:' auto / span 7',
    },
    xl: {
      gridColumn: 'auto / span 9',
    },
    space: {
      gridColumn: 'auto / span 20',
    },
    optLeft: {
      gridColumn: 'auto / span 17',
    },
    optRight: {
      gridColumn: 'auto/span 21',
    },
    left: {
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
    },
    right: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  }))

  const classes = useStyles()

  return (
    <Paper
      lang={lang}
      elevation={2}
      className={classnames(
        classes.key,
        classes[`${size}` as KeySize],
        classes[`${align}` as KeyAlignment ],
        classes[`${zone}` as KeyZone],
      )}
    >
      {displayValue}
    </Paper>
  )
}

export default Key
