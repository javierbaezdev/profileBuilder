export const convertStringToDate = (dateString: string) => {
  const [year, month, day] = dateString.split('-').map(Number)
  const dateObject = new Date(year, month - 1, day) // Months are zero-based
  return dateObject
}
