import { StyleSheet } from '@react-pdf/renderer'
import { baseStyles } from '@/modules/builder/components/Templates/Basic/styles'
import { COMBINED_COLORS } from '@/theme/combinedColors'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  title: baseStyles.title,
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  companyContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
  },
  companyName: {
    fontSize: 14,
    fontWeight: 500,
  },
  companyType: {
    backgroundColor: COMBINED_COLORS.zinc[300],
    borderRadius: 8,
    fontSize: 8,
    paddingVertical: 2,
    paddingHorizontal: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyDuration: {
    fontSize: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  positionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  positions: {
    fontSize: 12,
    fontWeight: 200,
  },
  description: {
    fontSize: 10,
    fontWeight: 100,
    color: COMBINED_COLORS.zinc[500],
  },
})
