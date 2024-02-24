import { Text, View } from '@react-pdf/renderer'
import { styles } from './styles'
import { EducationFrom } from '@/modules/builder/components/FormContainer/validation/initialValues'
import { formatRangeDateString } from '@/shared/utils/format'
import { Language } from '@/modules/builder/types'
import { LANGUAGE_DICT } from '@/shared/constants'

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
      {educationData?.institutions?.map((institution) => (
        <View style={styles.card}>
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
