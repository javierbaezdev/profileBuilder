import { Text, View, Image } from '@react-pdf/renderer'
import { styles } from './styles'
import { PresentationFrom } from '@/modules/builder/components/FormContainer/validation/initialValues'
import { NO_DATA } from '@/shared/constants'
import { CustomText } from '@/modules/builder/components/Templates/components'

interface Props {
  presentationData: PresentationFrom
}

const Presentation = ({ presentationData }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxTexts}>
        <CustomText
          styles={styles.nameText}
          value={presentationData?.fullName || NO_DATA.general}
          wordsPerLine={2}
          toUpperCase
        />
        <CustomText
          styles={styles.descriptionText}
          value={presentationData?.description}
          wordsPerLine={10}
        />
        <Text style={styles.locationText}>Wrocław, Poland, CET Wrocław</Text>
      </View>
      {presentationData.imgUrl && (
        <View style={styles.boxImage}>
          <Image source={presentationData.imgUrl} />
        </View>
      )}
    </View>
  )
}

export default Presentation
