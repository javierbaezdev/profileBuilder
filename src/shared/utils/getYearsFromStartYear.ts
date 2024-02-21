export const getYearsFromStartYear = (year?: number): number[] => {
  year = year || 1992
  const currentYear: number = new Date().getFullYear()
  const years: number[] = []

  for (let i = currentYear; i >= year; i--) {
    years.push(i)
  }

  return years
}
