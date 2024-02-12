import { Text, View } from '@react-pdf/renderer'
import { styles } from './styles'

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.description}>
        As a Full Stack Engineer, I have successfully taken multiple products
        from 0 to 1. I lead teams effectively, ensuring an environment where
        people can do their best work. Currently, I work mostly with TypeScript,
        React, Node.js, and GraphQL. I have over 8 years of experience in
        working remotely with companies all around the world.
      </Text>
    </View>
  )
}

export default About
