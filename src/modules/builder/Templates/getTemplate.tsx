import { Basic } from '.'
import {
  PresentationFrom,
  AboutFrom,
  ExperienceFrom,
  EducationFrom,
} from '@/modules/builder/components/FormContainer/validation/initialValues'

export const TEMPLATE_DICT: Record<string, any> = {
  BASIC: (
    presentationData: PresentationFrom,
    aboutData: AboutFrom,
    experienceData: ExperienceFrom,
    educationData: EducationFrom
  ) => (
    <Basic
      presentationData={presentationData}
      aboutData={aboutData}
      experienceData={experienceData}
      educationData={educationData}
    />
  ),
}
