import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import React, { CSSProperties } from 'react'
import Logo from '../Logo/Logo'
import Page from '../Page'
import { landingTheme } from '../../theme/theme'

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
  }))

  const landingContainer: CSSProperties = {
    height: '100%',
    display: 'flex',
    paddingTop: '15%',
    margin: 'auto',
  }

  const classes = useStyles()

  return (
    <Page
      theme={landingTheme}
      containerMaxWidth={'md'}
      containerStyles={landingContainer}
    >
      <Box className={classes.landingWrapper}>
        <Box className={classes.landingContent}>
          <Typography
            component='h1'
            variant='h2'
            color='textPrimary'
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
