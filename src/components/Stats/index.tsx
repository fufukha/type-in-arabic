import { StatsProps, StatsThreshold, SummaryMessage } from './stats-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGrinSquint,
  faGrinStars,
  faRocket,
  faTrophy,
  faBullseye,
} from '@fortawesome/free-solid-svg-icons'
import { IconName, library } from '@fortawesome/fontawesome-svg-core'

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
    if (hasMetThresHold) return { status: 'Level Completed' }

    if (errors > StatsThreshold.errors) {
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
    (cpm > StatsThreshold.cpm && errors === 0) || cpm > StatsThreshold.cpmGreat

  const badgeName = (): IconName => {
    if (cpm > StatsThreshold.cpmSuper && errors === 0) {
      return 'trophy'
    } else if (cpm > StatsThreshold.cpmGreat) {
      return 'rocket'
    } else if (cpm > StatsThreshold.cpm && errors === 0) {
      return 'bullseye'
    }
    //To Typescript error
    return 'bullseye'
  }

  return (
    <div>
      <FontAwesomeIcon icon={hasMetThresHold ? faGrinStars : faGrinSquint} />
      <p>{summaryMessages().status}</p>
      {!hasMetThresHold && <p>{summaryMessages().description}</p>}
      {hasEarnBadge && <FontAwesomeIcon icon={badgeName()} />}
      <span>{`Typos ${errors}  CPM ${cpm}`}</span>
      {hasMetThresHold && (
        <button onClick={nextLevelHandler}>NEXT LEVEL</button>
      )}
      <button onClick={redoLevelHandler}>TRY AGAIN</button>
    </div>
  )
}

export default Stats
