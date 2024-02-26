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
  SkillsFrom,
  ContactFrom,
} from '@/modules/builder/components/FormContainer/validation/initialValues'
import { Language } from '../../types'

interface props {
  language: Language
  presentationData: PresentationFrom
  aboutData: AboutFrom
  experienceData: ExperienceFrom
  educationData: EducationFrom
  skillsData: SkillsFrom
  contactsData: ContactFrom
}

const Basic = ({
  language,
  presentationData,
  aboutData,
  experienceData,
  educationData,
  skillsData,
  contactsData,
}: props) => {
  return (
    <Document>
      <Page
        style={styles.page}
        wrap={false}
      >
        <Presentation presentationData={presentationData} />
        <About
          aboutData={aboutData}
          language={language}
        />
        <Experience
          experienceData={experienceData}
          language={language}
        />
        <Education
          educationData={educationData}
          language={language}
        />
        <Skills
          skillsData={skillsData}
          language={language}
        />
        <Contact
          contactsData={contactsData}
          language={language}
        />
      </Page>
    </Document>
  )
}

export default Basic
