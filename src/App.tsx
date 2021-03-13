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
import { 
  Box, 
  Typography,
  Button,
} from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core'

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

  const useStyles = makeStyles(({ palette, typography }: Theme) => ({
    landingPage: {
      backgroundColor: palette.primary.main,
      height: '100vh',
    },
    landingPage_H2: {
      fontFamily: 'Amaranth, Roboto, sans serif',
      whiteSpace: 'pre-line',
    },
  }))

  const classes = useStyles()

  return (
    <>
      {!hasStarted && !isTaskCompleted && (
        <Box className={classes.landingPage} component={'main'}>
          <Typography className={classes.landingPage_H2} component="h1" variant="h2">
            {`Learn typing.\nArabic Keyboard.`}
          </Typography>
          <Button variant='contained' color='secondary' onClick={initialStartHandler}>Get started</Button>
        </Box>
      )}

      {hasStarted && !isTaskCompleted && (
        <>
          <p>{`errors = ${errors} CPM = ${cpm}`}</p>
          <Keyfield />
          <Keyboard />
        </>
      )}

      {isTaskCompleted && (
        <Stats
          errors={errors}
          cpm={cpm}
          redoLevelHandler={redoLevelHandler}
          nextLevelHandler={nextLevelHandler}
        />
      )}
    </>
  )
}

export default App
