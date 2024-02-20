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
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    borderRadius: '8px',
    border: `1px solid ${COMBINED_COLORS.zinc[300]}`,
    padding: '6px',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  institutionContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
  },
  institutionName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  institutionDuration: {
    fontSize: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  description: {
    fontSize: 10,
    fontWeight: 'normal',
    color: COMBINED_COLORS.zinc[500],
  },
})
