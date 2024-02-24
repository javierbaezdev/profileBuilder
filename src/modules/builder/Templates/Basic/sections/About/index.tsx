import { Text, View } from '@react-pdf/renderer'
import { styles } from './styles'
import { AboutFrom } from '@/modules/builder/components/FormContainer/validation/initialValues'
import { LANGUAGE_DICT, NO_DATA } from '@/shared/constants'
import { Language } from '@/modules/builder/types'

interface props {
  language: Language
  aboutData: AboutFrom
}

const About = ({ aboutData, language }: props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {LANGUAGE_DICT[language]?.basic.about.title}
      </Text>
      <Text style={styles.description}>
        {aboutData?.description || NO_DATA.general}{' '}
      </Text>
    </View>
  )
}

export default About
