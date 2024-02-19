import { Text } from '@react-pdf/renderer'
import { splitText } from '../utils'

interface Props {
  styles: any
  value?: string
  wordsPerLine?: number
  toUpperCase?: boolean
}

const CustomText = ({ styles, value, wordsPerLine, toUpperCase }: Props) => {
  return (
    <Text style={styles}>{splitText(value, wordsPerLine, toUpperCase)}</Text>
  )
}

export default CustomText
