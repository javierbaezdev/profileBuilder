import { StyleSheet } from '@react-pdf/renderer'

export const baseStyles = {
  title: {
    fontSize: 20,
    fontWeight: 900,
  },
}

export const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
})
