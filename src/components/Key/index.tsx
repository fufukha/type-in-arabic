import { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { KeyData, KeySize, KeyAlignment, KeyZone } from './key-types'
import { charSelector } from '../../state/selectors'
import classnames from 'classnames'
import { makeStyles, ButtonBase } from '@material-ui/core'

type KeyProps = {
  data: KeyData
}

const Key: React.FC<KeyProps> = ({ data }) => {
  const { size, align, value, lang, zone, keyName } = data
  const displayValue =
    value === 'opt-left' || value === 'opt-right' ? '' : value
  const pressedKey = useSelector(charSelector)

  const keyBtn = useRef<HTMLDivElement>(null)
  const blurTimer = setTimeout(() => {
    if(keyBtn.current !== null) {
      keyBtn.current.blur()
    }
  }, 400)

  useEffect(() => {
    if (pressedKey === keyName && keyBtn.current !== null) {
      keyBtn.current.focus()
    }
    return () => clearTimeout(blurTimer)
  })

  const useStyles = makeStyles(({ palette, typography, shadows, shape, transitions }) => ({
    key: {
      display: 'flex',
      margin: '1.5px',
      padding: '5px 10px',
      cursor: 'default',
      boxShadow: shadows['2'],
      borderRadius: shape.borderRadius,
      '&:focus-visible': {
        boxShadow: shadows['0'],
        transition: `box-shadow ${transitions.easing.easeOut} ${transitions.duration.standard}`
      },
      '&[lang="ar"]': {
        fontFamily: typography.h6.fontFamily,
        fontSize: '1.5em',
      },
      '&[lang="en"]': {
        fontSize: '1em',
      },
    },
    '.focus': {
      boxShadow: shadows['0'],
      // transition: `box-shadow ${transitions.easing.easeOut}`
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
      background: palette.grey['200'],
    },
    sm: {
      gridColumn: 'auto / span 4',
    },
    med: {
      gridColumn: 'auto / span 6',
    },
    lg: {
      gridColumn: ' auto / span 7',
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
    <ButtonBase
      lang={lang}
      component='div'
      ref={keyBtn}
      centerRipple
      focusRipple
      focusVisibleClassName={'focus'}
      
    >
      {displayValue}
    </ButtonBase>
  )
}

export default Key
