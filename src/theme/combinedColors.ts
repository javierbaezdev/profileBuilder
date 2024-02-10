import { darkMode } from './darkMode'
import { lightMode } from './lightMode'
import { ColorShadesCompleted } from './types'

export interface GeneralColors {
  mediumPurple: ColorShadesCompleted
  javaScript: ColorShadesCompleted
  zinc: ColorShadesCompleted
}

export const generalColors: GeneralColors = {
  mediumPurple: {
    '50': '#c9c6f5',
    '100': '#c0baf3',
    '200': '#b0a5ee',
    '300': '#998ae5',
    '400': '#896cda',
    '500': '#7b54cf',
    '600': '#7340ba',
    '700': '#64458c',
    '800': '#4a3768',
    '900': '#3a2e4d',
    '950': '#34214f',
  },
  javaScript: {
    '50': '#fcfcea',
    '100': '#faf7c7',
    '200': '#f6ed92',
    '300': '#f0db4f',
    '400': '#eac925',
    '500': '#dab118',
    '600': '#bc8a12',
    '700': '#966412',
    '800': '#7d5016',
    '900': '#6a4119',
    '950': '#3e230a',
  },
  zinc: {
    '50': '#fafafa',
    '100': '#f4f4f5',
    '200': '#e4e4e7',
    '300': '#d4d4d8',
    '400': '#a1a1aa',
    '500': '#71717a',
    '600': '#52525b',
    '700': '#3f3f46',
    '800': '#27272a',
    '900': '#18181b',
    '950': '#09090b',
  },
}

export const COMBINED_COLORS = {
  ...generalColors,
  light: {
    ...lightMode,
  },
  dark: {
    ...darkMode,
  },
}
