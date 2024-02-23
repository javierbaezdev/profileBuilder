import { format } from 'date-fns'
import { es } from 'date-fns/locale'
export const formatDate = (
  stringDate: string,
  isUpper: boolean = true
): string => {
  const date = new Date(stringDate)

  const f = 'MMMM/yyyy'

  const result = format(date, f, { locale: es })

  return isUpper ? result.toUpperCase() : result
}

export const formatRangeDateString = (initDate: string, endDate?: string) => {
  let format = formatDate(initDate, false)

  if (endDate) {
    const formatEnd = formatDate(endDate, false)

    format = `${format} - ${formatEnd}`
  } else {
    format = `${format} - A la actualidad`
  }

  return format
}
