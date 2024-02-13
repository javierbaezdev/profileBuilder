import { Document, Page } from '@react-pdf/renderer'
import { styles } from './styles'
import {
  About,
  Contact,
  Education,
  Experience,
  Presentation,
  Skills,
} from './sections'

const Basic = () => {
  return (
    <Document>
      <Page
        style={styles.page}
        wrap={false}
      >
        <Presentation />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </Page>
    </Document>
  )
}

export default Basic
