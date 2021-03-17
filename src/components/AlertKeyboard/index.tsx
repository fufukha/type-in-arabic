import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  Button,
  useTheme,
} from '@material-ui/core'

interface Props {
  onClose: () => void
}

const AlertKeyboard: React.FC<Props> = ({ onClose }) => {
  const { main } = useTheme().palette.secondary

  return (
    <Dialog
      open={true}
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogContent>
        <DialogTitle disableTypography>
          <FontAwesomeIcon icon={faGlobe} size='2x' color={main} />
        </DialogTitle>
        <DialogContentText id='alert-dialog-description'>
          Please change your keyboard layout to Arabic.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color={'secondary'}>
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AlertKeyboard
