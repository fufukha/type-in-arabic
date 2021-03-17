import { TypeBackground } from '@material-ui/core/styles/createPalette'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Keyboard from './components/Keyboard/index'
import Keyfield from './components/Keyfield/index'
import Page from './components/Page'
import Stats from './components/Stats/index'
import { nextLevel, startSession } from './state/actions'
import {
  cpmSelector,
  errorsSelector,
  hasStartedSelector,
  isSessionCompletedSelector,
  levelSelector,
} from './state/selectors'
import theme from './theme/theme'
import Landing from './components/Landing'

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

  const backgroundColor = (
    background: string = '#fafafa',
    paper: string = '#fff'
  ): TypeBackground => ({
    paper,
    default: background,
  })

  return (
    <>
      {!hasStarted && !isTaskCompleted && (
        <Landing getStarted={initialStartHandler} />
      )}

      {hasStarted && !isTaskCompleted && (
        <Page
          backgroundColor={backgroundColor(theme.palette.yellow.main)}
          containerMaxWidth={'md'}
        >
          <p>{`errors = ${errors} CPM = ${cpm}`}</p>
          <Keyfield />
          <Keyboard />
        </Page>
      )}

      {isTaskCompleted && (
        <Page
          backgroundColor={backgroundColor(theme.palette.blue.main)}
          containerMaxWidth={'md'}
        >
          <Stats
            errors={errors}
            cpm={cpm}
            redoLevelHandler={redoLevelHandler}
            nextLevelHandler={nextLevelHandler}
          />
        </Page>
      )}
    </>
  )
}

export default App
