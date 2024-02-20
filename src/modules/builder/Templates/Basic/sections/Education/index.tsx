import { Text, View } from '@react-pdf/renderer'
import { styles } from './styles'

const Education = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Education</Text>
      {Array.from({ length: 20 }, (_, index) => (
        <View style={styles.card}>
          <View style={styles.header}>
            <View style={styles.institutionContainer}>
              <Text style={styles.institutionName}>
                {index + 1} Wrocław University of Technology
              </Text>
            </View>
            <View style={styles.institutionDuration}>
              <Text>2007 - 2010</Text>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              Bachelor's Degree in Control systems engineering and Robotics
            </Text>
          </View>
        </View>
      ))}
    </View>
  )
}

export default Education
