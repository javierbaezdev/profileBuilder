import { format } from 'date-fns'
import { es } from 'date-fns/locale'
export const formatDate = (stringDate: string): string => {
  const date = new Date(stringDate)

  const f = 'MMMM/yyyy'

  const result = format(date, f, { locale: es })

  return result.toUpperCase()
}
