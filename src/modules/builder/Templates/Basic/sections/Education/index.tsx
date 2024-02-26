import { Text, View } from '@react-pdf/renderer'
import { styles } from './styles'
import { EducationFrom } from '@/modules/builder/components/FormContainer/validation/initialValues'
import { formatRangeDateString } from '@/shared/utils/format'
import { Language } from '@/modules/builder/types'
import { LANGUAGE_DICT } from '@/shared/constants'
import { MessagePdf } from '../../../components'

interface Props {
  language: Language
  educationData: EducationFrom
}

const Education = ({ educationData, language }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {LANGUAGE_DICT[language]?.basic.education.title}
      </Text>
      {educationData?.institutions?.length === 0 && (
        <MessagePdf
          msg='Tu lista está vacía'
          description='Actualmente no hay ningúna institución agregado. Haz clic en "Agregar nueva institución".'
        />
      )}
      {educationData?.institutions?.map((institution) => (
        <View
          style={styles.card}
          key={institution.key}
        >
          <View style={styles.header}>
            <View style={styles.institutionContainer}>
              <Text style={styles.institutionName}>
                {institution.educationName}
              </Text>
            </View>
            <View style={styles.institutionDuration}>
              <Text>
                {formatRangeDateString(
                  institution.startDate,
                  institution.endDate
                )}
              </Text>
            </View>
          </View>
          {institution.description && (
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>{institution.description}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  )
}

export default Education
