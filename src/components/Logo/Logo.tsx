import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import { CSSProperties } from '@material-ui/core/styles/withStyles'

interface LogoProps {
  sizePx: number
  color: React.CSSProperties['color'] | FontAwesomeIconProps['color']
  marginTop?: string
}

const Logo: React.FC<LogoProps> = ({ sizePx, color, marginTop }) => {
  const logoStyles: CSSProperties = {
    fontSize: `${sizePx}px`,
    transform: 'rotate(-10.81deg)',
  }
  const textStyles: CSSProperties = {
    color,
    fontSize: `${sizePx * 0.72}px`,
    fontFamily: 'Markazi Text, Roboto, sans serif',
    marginTop: '-13%',
  }

  return (
    <span className='fa-layers fa-fw' style={logoStyles}>
      <FontAwesomeIcon icon={faSquare} color={color} />
      <span className='fa-layers-text' style={textStyles}>
        ع
      </span>
    </span>
  )
}

export default Logo
