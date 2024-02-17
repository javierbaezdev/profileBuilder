import { Basic } from '.'
import { PresentationFrom } from '../FormContainer/validation/initialValues'

export const TEMPLATE_DICT: Record<string, any> = {
  BASIC: (presentationData: PresentationFrom) => (
    <Basic presentationData={presentationData} />
  ),
}
