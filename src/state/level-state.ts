export type LevelState = {
  level: number | null
  levelsData: string[]
  startTime: number | null
  errors: number
  index: number
  lastCharAt: number | null
  char: string | null
}

export const initialLevelState: LevelState = {
  level: null,
  levelsData: [],
  startTime: null,
  errors: 0,
  index: 0,
  lastCharAt: null,
  char: null,
}
