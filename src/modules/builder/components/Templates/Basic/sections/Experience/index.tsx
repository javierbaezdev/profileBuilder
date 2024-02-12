import { Text, View } from '@react-pdf/renderer'
import { styles } from './styles'

const Experience = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Work Experience</Text>
      {Array.from({ length: 5 }, (_, index) => (
        <View style={styles.card}>
          <View style={styles.header}>
            <View style={styles.companyContainer}>
              <Text style={styles.companyName}>Clevertech {index + 1}</Text>
              <View style={styles.companyType}>
                <Text>Remote</Text>
              </View>
            </View>
            <View style={styles.companyDuration}>
              <Text>2021 - 2024</Text>
            </View>
          </View>
          <View style={styles.positionsContainer}>
            <Text style={styles.positions}>Senior Full Stack Developer</Text>
            <Text style={styles.description}>
              Created Android mobile apps and led teams for companies like
              Vision Media, DKMS, or AAA. Built live streaming application for
              Evercast from scratch. Technologies: Android, Kotlin, React,
              TypeScript, GraphQL
            </Text>
          </View>
        </View>
      ))}
    </View>
  )
}

export default Experience
