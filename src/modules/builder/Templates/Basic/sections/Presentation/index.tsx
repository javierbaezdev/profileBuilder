import { View, Image } from '@react-pdf/renderer'
import { styles } from './styles'
import { PresentationFrom } from '@/modules/builder/components/FormContainer/validation/initialValues'
import { NO_DATA } from '@/shared/constants'
import { CustomText } from '@/modules/builder/Templates/components'
import { MapPinFilled } from '@/modules/builder/Templates/components/icons'
import defaultImg from '@/assets/CAT.jpg'

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
        <View style={styles.containerLocation}>
          <MapPinFilled />
          <CustomText
            styles={styles.locationText}
            value={presentationData?.location || NO_DATA.general}
            wordsPerLine={10}
          />
        </View>
      </View>
      {presentationData.imgUrl && (
        <View style={styles.boxImage}>
          <Image source={presentationData.imgUrl} />
        </View>
      )}
      {!presentationData.isUpdate && (
        <View style={styles.boxImage}>
          <Image source={defaultImg} />
        </View>
      )}
    </View>
  )
}

export default Presentation
