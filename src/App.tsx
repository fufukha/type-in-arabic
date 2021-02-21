import { useEffect } from 'react'
import Keyfield from './components/Keyfield/index'
import Keyboard from './components/Keyboard/index'
import Stats from './components/Stats/index'
import { useSelector, useDispatch } from 'react-redux'
import {
  errorsSelector,
  cpmSelector,
  isSessionCompletedSelector,
  levelSelector,
  hasStartedSelector,
} from './state/selectors'
import { startSession, nextLevel } from './state/actions'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const errors = useSelector(errorsSelector)
  const cpm = useSelector(cpmSelector)
  const isTaskCompleted = useSelector(isSessionCompletedSelector)
  const level = useSelector(levelSelector)
  const hasStarted = useSelector(hasStartedSelector)

  enum Local {
    LAST_LEVEL_REACHED = 'lastLevelReached',
  }

  const initialStartHandler = (e: MouseEvent | React.MouseEvent) => {
    e.preventDefault()
    const lastLevel = localStorage.getItem(Local.LAST_LEVEL_REACHED)
    const startLevel = lastLevel === null ? 0 : parseInt(lastLevel)
    dispatch(startSession(startLevel))
  }

  const redoLevelHandler = (e: MouseEvent | React.MouseEvent) => {
    e.preventDefault()
    dispatch(startSession(level))
  }

  const nextLevelHandler = (e: MouseEvent | React.MouseEvent) => {
    e.preventDefault()
    dispatch(nextLevel())
  }

  useEffect(() => {
    if (level !== null) {
      localStorage.setItem(Local.LAST_LEVEL_REACHED, level.toString())
    }
  }, [level, Local])

  return (
    <>
      {!hasStarted && !isTaskCompleted && (
        <button onClick={initialStartHandler}>START</button>
      )}

      {hasStarted && !isTaskCompleted && (
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
          <button onClick={redoLevelHandler}>REDO</button>
          <button onClick={nextLevelHandler}>NEXT</button>
        </>
      )}
    </>
  )
}

export default App
