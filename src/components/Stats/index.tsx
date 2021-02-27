type StatsProps = {
  errors: number
  cpm: number
  isNextLevelDisabled: boolean
  redoLevelHandler: (e: MouseEvent | React.MouseEvent) => void
  nextLevelHandler: (e: MouseEvent | React.MouseEvent) => void
}

const Stats: React.FC<StatsProps> = ({
  errors,
  cpm,
  isNextLevelDisabled,
  redoLevelHandler,
  nextLevelHandler,
}) => {
  return (
    <div>
      <span>{`Typos ${errors}  CPM ${cpm}`}</span>
      <button onClick={redoLevelHandler}>TRY AGAIN</button>
      <button disabled={isNextLevelDisabled} onClick={nextLevelHandler}>NEXT</button>
    </div>
  )
}

export default Stats
