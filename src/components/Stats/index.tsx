import { StatsProps, StatsThreshold, SummaryMessage } from './stats-types'

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
  return (
    <div>
      <p>{summaryMessages().status}</p>
      {!hasMetThresHold && <p>{summaryMessages().description}</p>}
      <span>{`Typos ${errors}  CPM ${cpm}`}</span>
      {hasMetThresHold && (
        <button onClick={nextLevelHandler}>NEXT LEVEL</button>
      )}
      <button onClick={redoLevelHandler}>TRY AGAIN</button>
    </div>
  )
}

export default Stats
