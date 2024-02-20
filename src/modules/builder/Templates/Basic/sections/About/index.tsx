import { Text, View } from '@react-pdf/renderer'
import { styles } from './styles'
import { AboutFrom } from '@/modules/builder/components/FormContainer/validation/initialValues'
import { NO_DATA } from '@/shared/constants'

interface props {
  aboutData: AboutFrom
}

const About = ({ aboutData }: props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.description}>
        {aboutData?.description || NO_DATA.general}{' '}
      </Text>
    </View>
  )
}

export default About
