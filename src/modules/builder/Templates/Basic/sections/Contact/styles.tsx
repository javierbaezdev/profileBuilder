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
    paddingBottom: basePadding,
    backgroundColor: COMBINED_COLORS.zinc[700],
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  },
  title: { ...baseStyles.title, color: COMBINED_COLORS.zinc[50] },
  contactContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '6px',
    flexWrap: 'wrap',
  },
  contactCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  itemLabel: {
    fontWeight: 'bold',
    fontSize: 12,
    color: COMBINED_COLORS.zinc[50],
  },
  itemValue: {
    fontWeight: 'thin',
    fontSize: 12,
    color: COMBINED_COLORS.zinc[50],
  },
})
