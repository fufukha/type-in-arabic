import { Grid } from '@material-ui/core'
import Key from '../Key'
import { getQwertyData } from './qwerty'
import { useStyles } from './styles'

const Keyboard: React.FC = () => {
  const qwerty = getQwertyData()
  const keys = qwerty.map((data, i) => <Key key={i} data={data} />)

  const classes = useStyles()

  return (
    <Grid className={classes.keyboard} container data-testid='keyboard'>
      {keys}
    </Grid>
  )
}

export default Keyboard
