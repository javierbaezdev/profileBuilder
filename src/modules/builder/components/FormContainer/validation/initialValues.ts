import { Presentation } from '@/modules/builder/types'

export interface PresentationFrom extends Presentation {
  isRequiredPresentation: boolean
  /* isRequiredAbout: boolean
  isRequiredExperience: boolean
  isRequiredEducation: boolean
  isRequiredSkills: boolean
  isRequiredContact: boolean */
}

export const initialValuesPresentation: PresentationFrom = {
  fullName: '',
  description: '',
  imgUrl: undefined,
  isRequiredPresentation: true,
}
