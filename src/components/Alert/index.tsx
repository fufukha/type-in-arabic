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
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { AlertMessage } from '../../types/types'

interface Props {
  onClose: () => void
  icon?: IconProp
  message: AlertMessage
}

const Alert: React.FC<Props> = ({ onClose, message, icon }) => {
  const { secondary } = useTheme().palette

  return (
    <Dialog
      open={true}
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogContent>
        <DialogTitle disableTypography>
          {icon && (
            <FontAwesomeIcon icon={icon} size='2x' color={secondary.main} />
          )}
        </DialogTitle>
        <DialogContentText id='alert-dialog-description'>
          {message}
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

export default Alert
