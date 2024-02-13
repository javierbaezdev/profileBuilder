import { Font, StyleSheet } from '@react-pdf/renderer'
import { bold, regular, semiBold, thin } from '@/shared/fonts/onest'
import { COMBINED_COLORS } from '@/theme/combinedColors'

Font.register({
  family: 'Onest',
  fonts: [
    {
      src: regular,
    },
    {
      src: bold,
      fontWeight: 'bold',
    },
    {
      src: regular,
      fontWeight: 'normal',
    },
    {
      src: semiBold,
      fontWeight: 'semibold',
    },
    {
      src: thin,
      fontWeight: 'thin',
    },
  ],
})

export const baseStyles = {
  title: {
    fontSize: 20,
    fontWeight: 900,
  },
}

export const basePadding = 35

export const styles = StyleSheet.create({
  page: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    fontFamily: 'Onest',
    border: `1px solid ${COMBINED_COLORS.zinc[50]}`,
    backgroundColor: COMBINED_COLORS.zinc[50],
  },
})
