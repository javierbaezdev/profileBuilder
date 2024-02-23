import '@fontsource-variable/onest'
import { ThemeConfig, extendTheme } from '@chakra-ui/react'
import { Styles, SystemStyleObject, mode } from '@chakra-ui/theme-tools'
import { COMBINED_COLORS } from './combinedColors'

const reactDatePickerStyles = () => ({
  '.react-datepicker-wrapper': {
    width: '100%',
  },
  '.react-datepicker__header': {
    background: `${COMBINED_COLORS.zinc[800]} !important`,
    color: ` ${COMBINED_COLORS.zinc[50]} !important`,
  },
  '.react-datepicker__header div': {
    color: `${COMBINED_COLORS.zinc[50]} !important`,
  },
  '.react-datepicker__header div:hover': {
    color: `#5c5b34 !important`,
  },
  '.react-datepicker__month': {
    background: `${COMBINED_COLORS.zinc[500]} !important`,
    borderRadius: 8,
    padding: 1,
  },
  '.react-datepicker__day--selected': {
    background: `${COMBINED_COLORS.zinc[950]} !important`,
  },
  '.react-datepicker__day--keyboard-selected': {
    background: `${COMBINED_COLORS.zinc[800]} !important`,
    color: `${COMBINED_COLORS.zinc[50]} !important`,
  },
  '.react-datepicker__day--selected:hover': {
    background: `${COMBINED_COLORS.zinc[800]} !important`,
  },
  '.react-datepicker__day--keyboard-selected:hover': {
    background: `${COMBINED_COLORS.zinc[800]} !important`,
  },
  '.date-picker-reports': {
    zIndex: '99999 !important',
  },
})

const scrollbarStyles = (props: SystemStyleObject) => ({
  '&::-webkit-scrollbar': {
    width: '16px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: mode(
      COMBINED_COLORS.zinc[100],
      COMBINED_COLORS.zinc[700]
    )(props),
    borderRadius: '9px',
    border: '4px solid transparent',
    backgroundClip: 'content-box',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },
  '&::-webkit-scrollbar-track-piece': {
    backgroundColor: 'transparent',
  },
})

const styles: Styles = {
  global: (props) => ({
    'html, body': {
      backgroundColor: mode(
        COMBINED_COLORS.zinc[100],
        COMBINED_COLORS.zinc[950]
      )(props),
      height: '100vh',
      width: '100vw',
      padding: 0,
      margin: 0,
    },
    '#root': {
      height: '100vh',
      width: '100vw',
    },
    ...scrollbarStyles(props),
    ...reactDatePickerStyles(),
  }),
}

const fonts = {
  body: "'Onest Variable', sans-serif",
  heading: "'Onest Variable', sans-serif",
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const colors = COMBINED_COLORS

const defaultTheme = {
  styles,
  fonts,
  colors,
  config,
}

const customTheme = extendTheme(defaultTheme)

export default customTheme
