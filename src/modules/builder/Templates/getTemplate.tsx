import { Basic } from '.'
import {
  PresentationFrom,
  AboutFrom,
  ExperienceFrom,
  EducationFrom,
  SkillsFrom,
  ContactFrom,
} from '@/modules/builder/components/FormContainer/validation/initialValues'
import { Language } from '../types'

export const TEMPLATE_DICT: Record<string, any> = {
  BASIC: (
    language: Language,
    presentationData: PresentationFrom,
    aboutData: AboutFrom,
    experienceData: ExperienceFrom,
    educationData: EducationFrom,
    skillsData: SkillsFrom,
    contactsData: ContactFrom
  ) => (
    <Basic
      language={language}
      presentationData={presentationData}
      aboutData={aboutData}
      experienceData={experienceData}
      educationData={educationData}
      skillsData={skillsData}
      contactsData={contactsData}
    />
  ),
}
