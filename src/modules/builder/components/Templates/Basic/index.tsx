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
import { PresentationFrom } from '../../FormContainer/validation/initialValues'

interface props {
  presentationData: PresentationFrom
}

const Basic = ({ presentationData }: props) => {
  return (
    <Document>
      <Page
        style={styles.page}
        wrap={false}
      >
        <Presentation presentationData={presentationData} />
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
