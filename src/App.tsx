import { useState } from 'react'
import Keyfield from './components/Keyfield/index'
import Keyboard from './components/Keyboard/index'
import Stats from './components/Stats/index'
import { useSelector, useDispatch } from 'react-redux'
import {
  errorsSelector,
  cpmSelector,
  isSessionCompletedSelector,
} from './state/selectors'
import { 
  startSession as startSessionAction,
  nextLevel,
 } from './state/actions'

const App: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false)

  const dispatch = useDispatch()
  const errors = useSelector(errorsSelector)
  const cpm = useSelector(cpmSelector)
  const isTaskCompleted = useSelector(isSessionCompletedSelector)

  const startLevelHandler = (e: MouseEvent | React.MouseEvent) => {
    setIsStarted(true)
    dispatch(startSessionAction())
  }

  const nextLevelHandler = (e: MouseEvent | React.MouseEvent) => {
    e.preventDefault()
    dispatch(nextLevel())
  }

  return (
    <>
      {!isStarted && !isTaskCompleted && (
        <button onClick={startLevelHandler}>START</button>
      )}

      {isStarted && !isTaskCompleted && (
        <>
          <Stats errors={errors} cpm={cpm} />
          <Keyfield />
          <Keyboard />
        </>
      )}

      {isTaskCompleted && (
        <>
          <div>Task completed</div>
          <Stats errors={errors} cpm={cpm} />
          <button onClick={startLevelHandler}>REDO</button>
          <button onClick={nextLevelHandler}>NEXT</button>
        </>
      )}
    </>
  )
}

export default App
