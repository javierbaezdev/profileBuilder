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
  chipContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    flexWrap: 'wrap',
  },
  chip: {
    borderRadius: '8px',
    paddingVertical: '4px',
    paddingHorizontal: '6px',
    backgroundColor: COMBINED_COLORS.zinc[700],
    color: COMBINED_COLORS.zinc[200],
    fontSize: 12,
  },
})
