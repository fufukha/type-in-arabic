import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { Paper, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inputChar as inputCharAction } from '../../state/actions'
import { indexSelector, promptSelector } from '../../state/selectors'
import { AlertMessage } from '../../types'
import Alert from '../Alert'
import { useStyles } from './styles'

const Keyfield: React.FC = () => {
  const [isArabicKeyboard, setIsArabicKeyboard] = useState(true)

  const dispatch = useDispatch()
  const index = useSelector(indexSelector)
  const prompt = useSelector(promptSelector)

  const input = (
    <>
      <span>{prompt.substring(0, index)}</span>
      {prompt.substring(index)}
    </>
  )

  const isArabic = (key: string) => {
    const keyUtf16 = key.codePointAt(0)!
    if (
      (keyUtf16 >= 1536 && keyUtf16 <= 1791) ||
      (keyUtf16 >= 43 && keyUtf16 <= 46) ||
      keyUtf16 === 61 ||
      keyUtf16 === 92 ||
      keyUtf16 === 33 ||
      keyUtf16 === 124
    ) {
      return true
    }
    return false
  }

  const isSystemEditKey = (key: string) => {
    const systemEditKeys = [
      'Alt',
      'Backspace',
      'CapsLock',
      'Control',
      'Enter',
      'Meta',
      'Shift',
      'Tab',
      ' ',
    ]
    return systemEditKeys.includes(key)
  }

  const handleOnKeydown = (e: KeyboardEvent | React.KeyboardEvent) => {
    if (e.key === ' ') e.preventDefault()

    if (isArabic(e.key) || isSystemEditKey(e.key)) {
      dispatch(inputCharAction(e.key, new Date().getTime()))
      setIsArabicKeyboard(true)
    } else {
      setIsArabicKeyboard(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleOnKeydown)
    return () => document.removeEventListener('keydown', handleOnKeydown)
  })

  const classes = useStyles()

  return (
    <>
      <Paper
        className={classes.field}
        variant='outlined'
        onKeyDown={handleOnKeydown}
      >
        <Typography variant='h6'>{input}</Typography>
      </Paper>

      {!isArabicKeyboard && (
        <Alert
          onClose={() => setIsArabicKeyboard(true)}
          icon={faGlobe}
          message={AlertMessage.keyboardError}
        />
      )}
    </>
  )
}

export default Keyfield
