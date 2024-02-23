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
  ExperienceFrom,
  EducationFrom,
} from '@/modules/builder/components/FormContainer/validation/initialValues'

interface props {
  presentationData: PresentationFrom
  aboutData: AboutFrom
  experienceData: ExperienceFrom
  educationData: EducationFrom
}

const Basic = ({
  presentationData,
  aboutData,
  experienceData,
  educationData,
}: props) => {
  return (
    <Document>
      <Page
        style={styles.page}
        wrap={false}
      >
        <Presentation presentationData={presentationData} />
        <About aboutData={aboutData} />
        <Experience experienceData={experienceData} />
        <Education educationData={educationData} />
        <Skills />
        <Contact />
      </Page>
    </Document>
  )
}

export default Basic
