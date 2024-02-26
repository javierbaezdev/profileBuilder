import { Text, View } from '@react-pdf/renderer'
import { styles } from './styles'
import { Language } from '@/modules/builder/types'
import { LANGUAGE_DICT } from '@/shared/constants'
import { ContactFrom } from '@/modules/builder/components/FormContainer/validation/initialValues'
import { MessagePdf } from '../../../components'

interface Props {
  contactsData: ContactFrom
  language: Language
}

const Contact = ({ contactsData, language }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {LANGUAGE_DICT[language]?.basic.contact.title}
      </Text>
      {contactsData?.contacts?.length === 0 && (
        <MessagePdf
          msg='Tu lista está vacía'
          description='Actualmente no hay ningún contacto agregado. Haz clic en "Agregar nuevo contacto".'
          variant='secondary'
        />
      )}
      <View style={styles.contactContainer}>
        {contactsData?.contacts?.map((contact) => (
          <View
            style={styles.contactCard}
            key={contact.key}
          >
            <Text style={styles.itemLabel}>{contact.label}:</Text>
            <Text style={styles.itemValue}>{contact.value}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Contact
