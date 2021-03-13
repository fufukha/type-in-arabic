import { PaletteColor } from '@material-ui/core/styles/createPalette'

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    blue?: PaletteColorOptions
    yellow?: PaletteColorOptions
    teal?: PaletteColorOptions
    orange?: PaletteColorOptions
    red?: PaletteColorOptions
  }

  interface Palette {
    blue: PaletteColor
    yellow: PaletteColor
    teal: PaletteColor
    orange: PaletteColor
    red: PaletteColor
  }
}
