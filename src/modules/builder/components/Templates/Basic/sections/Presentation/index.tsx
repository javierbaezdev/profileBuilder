import { Text, View, Image } from '@react-pdf/renderer'
import { styles } from './styles'
import { PresentationFrom } from '@/modules/builder/components/FormContainer/validation/initialValues'
import { NO_DATA } from '@/shared/constants'

interface Props {
  presentationData: PresentationFrom
}

const Presentation = ({ presentationData }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxTexts}>
        <Text style={styles.nameText}>
          {presentationData?.fullName || NO_DATA.general}
        </Text>
        <Text style={styles.descriptionText}>
          {presentationData?.description || NO_DATA.general}
        </Text>
        <Text style={styles.locationText}>Wrocław, Poland, CET</Text>
      </View>
      <View style={styles.boxImage}>
        <Image source='https://yt3.googleusercontent.com/vRF8BHREiJ3Y16AbMxEi_oEuoQlnNNqGpgULuZ6zrWSAi24HcxX3Vko42RN8ToctH-G0qlWd=s176-c-k-c0x00ffffff-no-rj' />
      </View>
    </View>
  )
}

export default Presentation
