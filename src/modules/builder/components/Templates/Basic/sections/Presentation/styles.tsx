import { COMBINED_COLORS } from '@/theme/combinedColors'
import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  boxTexts: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  nameText: {
    fontSize: 30,
    fontWeight: 900,
  },
  descriptionText: {
    fontSize: 10,
    color: COMBINED_COLORS.zinc[500],
    fontWeight: 100,
  },
  locationText: {
    fontSize: 8,
    color: COMBINED_COLORS.zinc[500],
    fontWeight: 100,
  },
  boxImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    overflow: 'hidden',
  },
})
