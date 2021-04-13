import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Box, Button, Typography } from '@material-ui/core'
import { landingTheme } from '../../theme/theme'
import { AlertMessage } from '../../types'
import Alert from '../Alert'
import Page from '../Page'
import { container, useStyles } from './styles'

interface Props {
  getStarted: (e: MouseEvent | React.MouseEvent) => void
  displayAlert: boolean
  onClose: () => void
  icon: IconDefinition
  alertMessage: AlertMessage
}

export const Landing: React.FC<Props> = ({
  getStarted,
  displayAlert,
  onClose,
  icon,
  alertMessage,
}) => {
  const classes = useStyles()

  return (
    <Page
      themeOptions={landingTheme}
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
      {displayAlert && (
        <Alert onClose={onClose} icon={icon} message={alertMessage} />
      )}
    </Page>
  )
}

export default Landing
