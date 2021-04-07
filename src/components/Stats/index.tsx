import { IconName, library } from '@fortawesome/fontawesome-svg-core'
import {
  faBullseye,
  faGrinStars,
  faLaughSquint,
  faRocket,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  createMuiTheme,
  Grid,
  Typography,
} from '@material-ui/core'
import { statSummaryTheme } from '../../theme/theme'
import Page from '../Page'
import { StatsProps, StatsThreshold, SummaryMessage } from './stats-types'
import { container, useStyles } from './styles'

library.add(faBullseye, faRocket, faTrophy)

const Stats: React.FC<StatsProps> = ({
  errors,
  cpm,
  redoLevelHandler,
  nextLevelHandler,
}) => {
  const hasMetThresHold =
    cpm > StatsThreshold.cpm && errors < StatsThreshold.errors

  const summaryMessages = (): SummaryMessage => {
    if (hasMetThresHold) return { status: 'Level Completed!' }

    if (errors >= StatsThreshold.errors) {
      return {
        status: 'Oops! Too many typos',
        description: `Must have less than ${StatsThreshold.errors} typos`,
      }
    }

    return {
      status: 'Oops! Too slow',
      description: `Must be greater than ${StatsThreshold.cpm} CPM`,
    }
  }

  const hasEarnBadge =
    hasMetThresHold &&
    ((cpm > StatsThreshold.cpm && errors === 0) ||
      cpm > StatsThreshold.cpmGreat)

  const badgeName = (): IconName => {
    if (cpm > StatsThreshold.cpmSuper && errors === 0) {
      return 'trophy'
    } else if (cpm > StatsThreshold.cpmGreat) {
      return 'rocket'
    } else if (cpm > StatsThreshold.cpm && errors === 0) {
      return 'bullseye'
    }
    //Stop Typescript error
    return 'bullseye'
  }

  const classes = useStyles(hasMetThresHold, createMuiTheme(statSummaryTheme))()

  return (
    <Page
      themeOptions={statSummaryTheme}
      containerMaxWidth={'xs'}
      containerStyles={container}
    >
      <Card className={classes.card}>
        <CardContent className={classes.wrapper}>
          <Grid container>
            <Grid
              className={classes.statMessage}
              item
              container
              xs={12}
              direction='column'
              justify='center'
              alignItems='center'
            >
              <FontAwesomeIcon
                icon={hasMetThresHold ? faGrinStars : faLaughSquint}
                color='white'
                size='7x'
              />
              <Typography component='h1' variant='h6'>
                {summaryMessages().status}
              </Typography>
              {!hasMetThresHold && (
                <Typography component='p' variant='caption'>
                  {summaryMessages().description}
                </Typography>
              )}
            </Grid>
            <Grid
              className={classes.statContent}
              item
              container
              xs={12}
              direction='column'
              justify='center'
              alignItems='center'
            >
              {hasEarnBadge && (
                <Grid
                  className={classes.badge}
                  item
                  xs={12}
                  container
                  justify='center'
                >
                  <FontAwesomeIcon size='5x' icon={badgeName()} />
                </Grid>
              )}
              <Grid
                className={classes.statistics}
                item
                xs={12}
                container
                justify='center'
              >
                <Grid
                  item
                  xs={4}
                  container
                  direction='column'
                  justify='center'
                  alignItems='center'
                  alignContent='center'
                >
                  <Typography align='center' variant='h2'>
                    {errors}
                  </Typography>
                  <Typography align='center' variant='button'>
                    {errors === 1 ? 'Typo' : 'Typos'}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={4}
                  container
                  direction='column'
                  justify='center'
                  alignItems='center'
                  alignContent='center'
                >
                  <Typography align='center' variant='h2'>
                    {cpm}
                  </Typography>
                  <Typography align='center' variant='button'>
                    CPM
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.buttonWrapper}>
          <Grid
            container
            xs={7}
            direction='column'
            justify='center'
            alignItems='stretch'
          >
            <Grid item>
              <Button
                variant={!hasMetThresHold ? 'contained' : 'outlined'}
                fullWidth
                onClick={redoLevelHandler}
                color={hasMetThresHold ? 'primary' : 'secondary'}
              >
                TRY AGAIN
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant={hasMetThresHold ? 'contained' : 'outlined'}
                fullWidth
                disabled={!hasMetThresHold}
                color={hasMetThresHold ? 'primary' : 'secondary'}
                onClick={nextLevelHandler}
              >
                NEXT LEVEL
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Page>
  )
}

export default Stats
