type StatsProps = {
  errors: number
  cpm: number
  redoLevelHandler: (e: MouseEvent | React.MouseEvent) => void
  nextLevelHandler: (e: MouseEvent | React.MouseEvent) => void
}

const Stats: React.FC<StatsProps> = ({
  errors,
  cpm,
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
