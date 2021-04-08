import Key from '../Key'
import { getQwertyData } from './qwerty'
import { useStyles } from './styles'

const Keyboard: React.FC = () => {
  const qwerty = getQwertyData()
  const keys = qwerty.map((data, i) => <Key key={i} data={data} />)

  const classes = useStyles()

  return (
    <div className={classes.keyboard}>
      {keys}
    </div>
  )
}

export default Keyboard
