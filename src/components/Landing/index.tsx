import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import { TypeBackground } from '@material-ui/core/styles/createPalette'
import React, { CSSProperties } from 'react'
import Logo from '../Logo/Logo'
import Page from '../Page'
import theme from '../../theme/theme'

interface Props {
  getStarted: (e: MouseEvent | React.MouseEvent) => void
}

export const Landing: React.FC<Props> = ({ getStarted }) => {
  const useStyles = makeStyles(() => ({
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
          <Button variant='contained' color='primary' onClick={getStarted}>
            Get started
          </Button>
        </Box>
        <Box className={classes.logoWrapper}>
          <Logo sizePx={200} color='white' />
        </Box>
      </Box>
    </Page>
  )
}

export default Landing
