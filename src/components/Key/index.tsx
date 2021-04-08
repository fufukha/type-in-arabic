import { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { KeyProps, KeySize, KeyAlignment, KeyZone } from './key-types'
import { charSelector } from '../../state/selectors'
import classnames from 'classnames'
import { ButtonBase } from '@material-ui/core'
import useStyles from './styles'

const Key: React.FC<KeyProps> = ({ data }) => {
  const { size, align, value, lang, zone, keyName } = data
  const displayValue =
    value === 'opt-left' || value === 'opt-right' ? '' : value

  const userKeyInput = useSelector(charSelector)
  const keyBtn = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const blurTimer = setTimeout(() => {
      if (keyBtn.current !== null) {
        keyBtn.current.blur()
      }
    }, 400)

    if (userKeyInput === keyName && keyBtn.current !== null) {
      keyBtn.current.focus()
    }
    return () => clearTimeout(blurTimer)
  }, [userKeyInput, keyName])

  const classes = useStyles()

  return (
    <ButtonBase
      lang={lang}
      component='div'
      className={classnames(
        classes.key,
        classes[`${size}` as KeySize],
        classes[`${align}` as KeyAlignment],
        classes[`${zone}` as KeyZone]
      )}
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
