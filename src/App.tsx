import { Box, Button, makeStyles, Theme, Typography } from '@material-ui/core'
import { TypeBackground } from '@material-ui/core/styles/createPalette'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
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
import Logo from './components/Logo/Logo'

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
    landingWrapper: {
      position: 'relative',
      width: '100%',
    },
    logoWrapper: {
      position: 'absolute',
      right: '110px',
      top: '-40px',
    },
    landingContent: {
      width: '75%',
      margin: '0 auto',
    },
    landing_H2: {
      fontFamily: 'Amaranth, Roboto, sans serif',
      fontSize: '64px',
      color: 'white',
      whiteSpace: 'pre-line',
    },
  }))

  const landingContainer: CSSProperties = {
    height: '100%',
    display: 'flex',
    paddingTop: '15%',
    margin: 'auto',
  }

  const classes = useStyles()

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
        <Page
          backgroundColor={backgroundColor(theme.palette.secondary.main)}
          containerMaxWidth={'md'}
          containerStyles={landingContainer}
        >
          <Box className={classes.landingWrapper}>
            <Box className={classes.landingContent}>
              <Typography
                className={classes.landing_H2}
                component='h1'
                variant='h2'
                gutterBottom
              >
                {`Learn typing.\nArabic Keyboard.`}
              </Typography>
              <Button
                variant='contained'
                color='primary'
                onClick={initialStartHandler}
              >
                Get started
              </Button>
            </Box>
            <Box className={classes.logoWrapper}>
              <Logo sizePx={200} color='white' />
            </Box>
          </Box>
        </Page>
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
