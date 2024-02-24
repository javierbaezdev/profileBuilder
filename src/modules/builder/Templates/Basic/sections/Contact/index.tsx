import { Text, View } from '@react-pdf/renderer'
import { styles } from './styles'
import { Language } from '@/modules/builder/types'
import { LANGUAGE_DICT } from '@/shared/constants'

const contactData = [
  {
    label: 'Email',
    value: 'hola@gmail.com',
  },
  {
    label: 'Web',
    value: 'holahola.dev',
  },
  {
    label: 'Linkedin',
    value: 'https://www.linkedin.com/in/javierbaezdev/',
  },
]

interface Props {
  language: Language
}

const Contact = ({ language }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {LANGUAGE_DICT[language]?.basic.contact.title}
      </Text>
      <View style={styles.contactContainer}>
        {contactData.map((item) => (
          <View style={styles.contactCard}>
            <Text style={styles.itemLabel}>{item.label}:</Text>
            <Text style={styles.itemValue}>{item.value}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Contact
