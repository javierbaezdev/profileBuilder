import { Basic } from '.'
import {
  PresentationFrom,
  AboutFrom,
  ExperienceFrom,
  EducationFrom,
} from '@/modules/builder/components/FormContainer/validation/initialValues'
import { Language } from '../types'

export const TEMPLATE_DICT: Record<string, any> = {
  BASIC: (
    language: Language,
    presentationData: PresentationFrom,
    aboutData: AboutFrom,
    experienceData: ExperienceFrom,
    educationData: EducationFrom
  ) => (
    <Basic
      language={language}
      presentationData={presentationData}
      aboutData={aboutData}
      experienceData={experienceData}
      educationData={educationData}
    />
  ),
}
