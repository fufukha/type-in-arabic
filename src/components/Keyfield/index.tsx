import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { inputChar as inputCharAction } from '../../state/actions'
import { promptSelector, indexSelector } from '../../state/selectors'
import styles from './Keyfield.module.css'

const Keyfield: React.FC = () => {
	const dispatch = useDispatch()
	const index = useSelector(indexSelector)
	const prompt = useSelector(promptSelector)!
	let ignoreKeystroke = false

	const input = (
		<>
			<span>{prompt.substring(0, index)}</span>
			{prompt.substring(index)}
		</>
	)

	const handleOnKeydown = (e: KeyboardEvent | React.KeyboardEvent) => {
		if (e.key === ' ') e.preventDefault()

		if (/^[a-z]$/.test(e.key) && !ignoreKeystroke) {
			alert('Use Arabic Keyboard')
			ignoreKeystroke = true
		} else if (!ignoreKeystroke) {
			dispatch(inputCharAction(e.key, new Date().getTime()))
		} else if (ignoreKeystroke) {
			ignoreKeystroke = false
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', (e: KeyboardEvent) =>
			handleOnKeydown(e)
		)
		return () =>
			document.removeEventListener('keydown', (e) => handleOnKeydown(e))
	})

	return (
		<div
			className={styles.keyfieldContainer}
			onKeyDown={(e) => handleOnKeydown(e)}
		>
			<div>{input}</div>
		</div>
	)
}

export default Keyfield
