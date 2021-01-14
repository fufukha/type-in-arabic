export type LevelState = {
  startTime: number | null
  errors: number
  prompt: string | null
  index: number
  lastCharAt: number | null
  char: string | null
}

export const initialLevelState: LevelState = {
  startTime: null,
  errors: 0,
  prompt: null,
  index: 0,
  lastCharAt: null,
  char: null,
}
