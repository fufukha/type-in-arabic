type StatsProps = {
  errors: number
  cpm: number
  message: [string, string]
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
  message,
}) => {
  return (
    <div>
      <span>{`Typos ${errors}  CPM ${cpm}`}</span>
      <p>{message[0]}</p>
      <p>{message[1]}</p>
      <button onClick={redoLevelHandler}>TRY AGAIN</button>
      <button disabled={isNextLevelDisabled} onClick={nextLevelHandler}>NEXT</button>
    </div>
  )
}

export default Stats
