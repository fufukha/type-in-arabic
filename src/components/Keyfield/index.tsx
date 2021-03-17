import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { inputChar as inputCharAction } from '../../state/actions'
import { promptSelector, indexSelector } from '../../state/selectors'
import { makeStyles, Paper, Typography } from '@material-ui/core'
import AlertKeyboard from '../AlertKeyboard'

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

  const useStyles = makeStyles(() => ({
    field: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '0 24px',
      marginBottom: '40px',
      '& span': {
        color: 'lightgrey',
        borderLeft: '1px black solid',
        animationName: 'cursor',
        animationDuration: '1.5s',
        animationIterationCount: 'infinite',
      }
    },
    '@keyframes cursor': {
      '0%,50%': {borderLeftColor: 'rgba(0, 0, 0, 1)'},
      '51%,100%': {borderLeftColor: 'rgba(0, 0, 0, 0)'},
    }, 
    
  }))

  const classes = useStyles()

  return (
    <>
      {isArabicKeyboard ? (
        <Paper
          className={classes.field}
          variant='outlined'
          onKeyDown={handleOnKeydown}
        >
          <Typography variant='h6'>{input}</Typography>
        </Paper>
      ) : (
        <AlertKeyboard onClose={() => setIsArabicKeyboard(true)} />
      )}
    </>
  )
}

export default Keyfield
