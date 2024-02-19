const trimObjectValues = <T extends { [key: string]: any }>(obj: T): T => {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  const trimmedObj = {} as T

  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      trimmedObj[key] = obj[key].trim()
    } else {
      trimmedObj[key] = trimObjectValues(obj[key])
    }
  }

  return trimmedObj
}

export default trimObjectValues
