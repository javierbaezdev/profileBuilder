import { Text, View } from '@react-pdf/renderer'
import { styles } from './styles'
import { Language } from '@/modules/builder/types'
import { LANGUAGE_DICT } from '@/shared/constants'

interface Props {
  language: Language
}

const Skills = ({ language }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {LANGUAGE_DICT[language]?.basic.skills.title}
      </Text>
      <View style={styles.chipContainer}>
        {[
          'JavaScript',
          'TypeScript',
          'React/Next.js/Remix',
          'Node.js',
          'GraphQL',
          'Relay',
          'WebRTC',
        ].map((s) => (
          <View style={styles.chip}>
            <Text>{s}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Skills
