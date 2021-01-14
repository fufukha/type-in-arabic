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
import { startSession as startSessionAction } from './state/actions'

const App: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false)

  const dispatch = useDispatch()
  const errors = useSelector(errorsSelector)
  const cpm = useSelector(cpmSelector)
  const isTaskCompleted = useSelector(isSessionCompletedSelector)

  const startLevelHandler = () => {
    setIsStarted(true)
    dispatch(startSessionAction())
  }

  return (
    <>
      {isStarted && !isTaskCompleted && (
        <>
          <Stats errors={errors} cpm={cpm} />
          <Keyfield />
          <Keyboard />
        </>
      )}

      {!isStarted && <button onClick={startLevelHandler}>Start</button>}

      {isTaskCompleted && isStarted && (
        <>
          <div>Task completed</div>
          <Stats errors={errors} cpm={cpm} />
        </>
      )}
    </>
  )
}

export default App
