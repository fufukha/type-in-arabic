import { Box, Button, Typography } from '@material-ui/core'
import { landingTheme } from '../../theme/theme'
import Page from '../Page'
import { container, useStyles } from './styles'

interface Props {
  getStarted: (e: MouseEvent | React.MouseEvent) => void
}

export const Landing: React.FC<Props> = ({ getStarted }) => {
  const classes = useStyles()

  return (
    <Page
      theme={landingTheme}
      containerMaxWidth={'md'}
      containerStyles={container}
    >
      <Box className={classes.wrapper}>
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
    </Page>
  )
}

export default Landing
