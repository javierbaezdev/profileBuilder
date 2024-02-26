import { StyleSheet } from '@react-pdf/renderer'
import { COMBINED_COLORS } from '@/theme/combinedColors'

export const stylesPrimary = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    padding: 4,
    borderRadius: 10,
    border: `1px solid ${COMBINED_COLORS.zinc[300]}`,
  },
  containerTexts: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  msg: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COMBINED_COLORS.zinc[900],
  },
  description: {
    fontSize: 10,
    fontWeight: 'thin',
    color: COMBINED_COLORS.zinc[600],
  },
})

export const stylesSecondary = StyleSheet.create({
  container: {
    ...stylesPrimary.container,
    border: `1px solid ${COMBINED_COLORS.zinc[500]}`,
  },
  containerTexts: {
    ...stylesPrimary.containerTexts,
  },
  msg: {
    ...stylesPrimary.msg,
    color: COMBINED_COLORS.zinc[100],
  },
  description: {
    ...stylesPrimary.description,
    color: COMBINED_COLORS.zinc[300],
  },
})
