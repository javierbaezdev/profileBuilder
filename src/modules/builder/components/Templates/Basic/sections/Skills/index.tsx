import { Text, View } from '@react-pdf/renderer'
import { styles } from './styles'

const Skills = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skills</Text>
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
