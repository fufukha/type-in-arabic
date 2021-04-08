import { Grid, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { cpmSelector, errorsSelector } from '../../state/selectors'
import { levelsTheme } from '../../theme/theme'
import Keyboard from '../Keyboard'
import Keyfield from '../Keyfield'
import Page from '../Page'
import { containerStyles, useStyles } from './styles'

const Levels: React.FC = () => {
  const errors = useSelector(errorsSelector)
  const cpm = useSelector(cpmSelector)

  const classes = useStyles()

  return (
    <Page
      themeOptions={levelsTheme}
      containerMaxWidth={'md'}
      containerStyles={containerStyles}
    >
      <Grid
        className={classes.statBar}
        container
        justify='space-between'
        data-testid='statBar'
      >
        <Grid item xs={3}>
          <Typography gutterBottom component={'h1'} variant={'h5'}>
            {`Typos ${errors}`}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography gutterBottom component={'h1'} variant={'h5'}>
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
