const splitText = (
  text: string = '',
  wordsPerLine: number = Infinity,
  toUpperCase: boolean = false
): string => {
  const words: string[] = toUpperCase
    ? text.toUpperCase().split(' ')
    : text.split(' ')
  let result: string = ''
  let wordCount: number = 0

  for (const word of words) {
    result += word + ' '
    wordCount++

    if (wordCount === wordsPerLine) {
      result += '\n'
      wordCount = 0
    }
  }

  return result.trim()
}

export default splitText
