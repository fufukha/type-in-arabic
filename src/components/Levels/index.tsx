import { Grid, makeStyles, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { cpmSelector, errorsSelector } from '../../state/selectors'
import { levelsTheme } from '../../theme/theme'
import Page from '../Page'
import Keyfield from '../Keyfield'
import Keyboard from '../Keyboard'

interface Props {}

const Levels: React.FC<Props> = () => {
  const errors = useSelector(errorsSelector)
  const cpm = useSelector(cpmSelector)

  const useStyles = makeStyles(() => ({
    statBar: {
      width: '50%',
      margin: '100px auto 0',
    },
  }))

  const classes = useStyles()

  return (
    <Page theme={levelsTheme} containerMaxWidth={'md'}>
      <Grid className={classes.statBar} container justify='space-between'>
        <Grid item xs={3}>
          <Typography gutterBottom component={'h1'} variant={'body1'}>
            {`Typos ${errors}`}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography gutterBottom component={'h1'} variant={'body1'}>
            {`CPM ${cpm}`}
          </Typography>
        </Grid>
      </Grid>
      <Keyfield />
      <Keyboard />
    </Page>
  )
}

export default Levels
