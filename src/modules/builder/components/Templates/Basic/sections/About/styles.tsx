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
  description: {
    fontSize: 10,
    color: COMBINED_COLORS.zinc[500],
  },
})
