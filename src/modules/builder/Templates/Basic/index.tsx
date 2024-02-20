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
import {
  PresentationFrom,
  AboutFrom,
} from '@/modules/builder/components/FormContainer/validation/initialValues'

interface props {
  presentationData: PresentationFrom
  aboutData: AboutFrom
}

const Basic = ({ presentationData, aboutData }: props) => {
  return (
    <Document>
      <Page
        style={styles.page}
        wrap={false}
      >
        <Presentation presentationData={presentationData} />
        <About aboutData={aboutData} />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </Page>
    </Document>
  )
}

export default Basic
