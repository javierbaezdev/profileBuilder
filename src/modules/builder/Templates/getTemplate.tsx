import { Basic } from '.'
import {
  PresentationFrom,
  AboutFrom,
} from '@/modules/builder/components/FormContainer/validation/initialValues'

export const TEMPLATE_DICT: Record<string, any> = {
  BASIC: (presentationData: PresentationFrom, aboutData: AboutFrom) => (
    <Basic
      presentationData={presentationData}
      aboutData={aboutData}
    />
  ),
}
