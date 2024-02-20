import { StyleSheet } from '@react-pdf/renderer'
import {
  basePadding,
  baseStyles,
} from '@/modules/builder/Templates/Basic/styles'
import { COMBINED_COLORS } from '@/theme/combinedColors'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    paddingTop: 10,
    paddingHorizontal: basePadding,
  },
  title: baseStyles.title,
  description: {
    fontSize: 10,
    color: COMBINED_COLORS.zinc[500],
  },
})
