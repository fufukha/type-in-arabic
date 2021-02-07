import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { inputChar as inputCharAction } from '../../state/actions'
import { promptSelector, indexSelector } from '../../state/selectors'
import styles from './Keyfield.module.css'

const Keyfield: React.FC = () => {
  const dispatch = useDispatch()
  const index = useSelector(indexSelector)
  const prompt = useSelector(promptSelector)!

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
    } else {
      alert('Are you sure you are using an Arabic Keyboard? Switch now before pressing OK')
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleOnKeydown)
    return () => document.removeEventListener('keydown', handleOnKeydown)
  })

  return (
    <div className={styles.keyfieldContainer} onKeyDown={handleOnKeydown}>
      <div>{input}</div>
    </div>
  )
}

export default Keyfield
