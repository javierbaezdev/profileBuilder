import { Text, View } from '@react-pdf/renderer'
import { stylesPrimary, stylesSecondary } from './styles'
import { InfoCircle } from '../icons'

type VariantType = 'primary' | 'secondary'
interface MessageProps {
  /* type: 'info' | 'warning' | 'error' */
  msg: string
  description?: string
  variant?: VariantType
}

const variantDict: Record<VariantType, any> = {
  primary: stylesPrimary,
  secondary: stylesSecondary,
}

const Message = ({ msg, description, variant = 'primary' }: MessageProps) => {
  const styles = variantDict[variant]
  return (
    <View style={styles.container}>
      <InfoCircle />
      <View style={styles.containerTexts}>
        <Text style={styles.msg}>{msg}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
    </View>
  )
}

export default Message
