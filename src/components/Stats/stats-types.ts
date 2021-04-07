export type StatsProps = {
  errors: number
  cpm: number
  redoLevelHandler: (e: MouseEvent | React.MouseEvent) => void
  nextLevelHandler: (e: MouseEvent | React.MouseEvent) => void
}

export enum StatsThreshold {
  cpm = 130,
  errors = 5,
  cpmSuper = 200,
  cpmGreat = 150,
}

export type SummaryMessage = {
  status: 'Level Completed!' | 'Oops! Too many typos' | 'Oops! Too slow'
  description?: string
}
