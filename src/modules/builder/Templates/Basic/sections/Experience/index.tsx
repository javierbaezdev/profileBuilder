import { Text, View } from '@react-pdf/renderer'
import { styles } from './styles'
import { ExperienceFrom } from '@/modules/builder/components/FormContainer/validation/initialValues'
import { LANGUAGE_DICT, WORK_TYPE_DICT } from '@/shared/constants'
import { formatRangeDateString } from '@/shared/utils/format'
import { Language } from '@/modules/builder/types'

interface Props {
  language: Language
  experienceData: ExperienceFrom
}

const Experience = ({ experienceData, language }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {LANGUAGE_DICT[language]?.basic.experience.title}
      </Text>
      {experienceData?.works?.map((work) => (
        <View style={styles.card}>
          <View style={styles.header}>
            <View style={styles.companyContainer}>
              <Text style={styles.companyName}>{work.companyName}</Text>
              <View style={styles.companyType}>
                <Text>{WORK_TYPE_DICT[work.type].es}</Text>
              </View>
            </View>
            <View style={styles.companyDuration}>
              <Text>{formatRangeDateString(work.startDate, work.endDate)}</Text>
            </View>
          </View>
          <View style={styles.positionsContainer}>
            <Text style={styles.positions}>{work.position}</Text>
            {work.description && (
              <Text style={styles.description}>{work.description}</Text>
            )}
          </View>
        </View>
      ))}
    </View>
  )
}

export default Experience
