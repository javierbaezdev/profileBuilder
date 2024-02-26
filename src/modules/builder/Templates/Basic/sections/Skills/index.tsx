import { Text, View } from '@react-pdf/renderer'
import { styles } from './styles'
import { Language } from '@/modules/builder/types'
import { LANGUAGE_DICT } from '@/shared/constants'
import { SkillsFrom } from '@/modules/builder/components/FormContainer/validation/initialValues'
import { MessagePdf } from '../../../components'

interface Props {
  skillsData: SkillsFrom
  language: Language
}

const Skills = ({ skillsData, language }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {LANGUAGE_DICT[language]?.basic.skills.title}
      </Text>
      {skillsData?.skills?.length === 0 && (
        <MessagePdf
          msg='Tu lista está vacía'
          description='Actualmente no hay ningúna habilidad agregado. Haz clic en "Agregar nueva habilidad".'
        />
      )}
      <View style={styles.chipContainer}>
        {skillsData?.skills?.map((skill) => (
          <View
            style={styles.chip}
            key={skill.key}
          >
            <Text>{skill.value}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Skills
