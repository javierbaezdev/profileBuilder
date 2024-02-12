import { Document, Page } from '@react-pdf/renderer'
import { styles } from './styles'
import { About, Education, Experience, Presentation } from './sections'

const Basic = () => {
  return (
    <Document>
      <Page style={styles.page}>
        <Presentation />
        <About />
        <Experience />
        <Education />
      </Page>
    </Document>
  )
}

export default Basic
