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
  institutionContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
  },
  institutionName: {
    fontSize: 14,
    fontWeight: 500,
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
    fontWeight: 100,
    color: COMBINED_COLORS.zinc[500],
  },
})
