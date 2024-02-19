const splitTextByLine = (str: string = '', lineNum: number = 0): string[] => {
  // Split the text into words
  const words = str.split(' ')

  // Check if the line number is within range
  if (lineNum <= 0) {
    return [str]
  }

  // Calculate the number of words per line and the number of lines with extra words
  const wordsPerLine = Math.floor(words.length / lineNum)
  const extraWords = words.length % lineNum

  // Build the array with the specified lines
  const result = []
  let startIndex = 0
  for (let i = 0; i < lineNum; i++) {
    let lineLength = wordsPerLine + (i < extraWords ? 1 : 0)
    result.push(words.slice(startIndex, startIndex + lineLength).join(' '))
    startIndex += lineLength
  }

  const finalResult: string[] = result.filter((line) => line !== '')
  return finalResult
}

export default splitTextByLine
