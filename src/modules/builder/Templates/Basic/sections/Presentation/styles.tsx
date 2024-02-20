import { COMBINED_COLORS } from '@/theme/combinedColors'
import { StyleSheet, Styles } from '@react-pdf/renderer'
import { basePadding } from '@/modules/builder/Templates/Basic/styles'

export const styles: Styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: COMBINED_COLORS.zinc[700],
    paddingVertical: basePadding,
    paddingHorizontal: basePadding,
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
    gap: 2,
  },
  boxTexts: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  nameText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COMBINED_COLORS.zinc[50],
  },
  descriptionText: {
    fontSize: 12,
    color: COMBINED_COLORS.zinc[200],
    fontWeight: 'thin',
  },
  containerLocation: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  locationText: {
    fontSize: 10,
    color: COMBINED_COLORS.zinc[200],
    fontWeight: 'thin',
  },
  boxImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    overflow: 'hidden',
  },
})
