import { StyleSheet } from '@react-pdf/renderer'
import {
  basePadding,
  baseStyles,
} from '@/modules/builder/components/Templates/Basic/styles'
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
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    borderRadius: '8px',
    border: `1px solid ${COMBINED_COLORS.zinc[300]}`,
    padding: '4px',
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
    fontWeight: 'bold',
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
    fontWeight: 'bold',
  },
  description: {
    fontSize: 10,
    fontWeight: 'normal',
    color: COMBINED_COLORS.zinc[500],
  },
})
