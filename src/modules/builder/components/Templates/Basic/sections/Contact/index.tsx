import { Text, View } from '@react-pdf/renderer'
import { styles } from './styles'

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

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact</Text>
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
