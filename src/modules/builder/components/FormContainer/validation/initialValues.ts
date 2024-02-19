import { Presentation } from '@/modules/builder/types'

export interface PresentationFrom extends Presentation {
  isRequiredPresentation: boolean
  isUpdate: boolean
  /* isRequiredAbout: boolean
  isRequiredExperience: boolean
  isRequiredEducation: boolean
  isRequiredSkills: boolean
  isRequiredContact: boolean */
}

export const initialValuesPresentation: PresentationFrom = {
  fullName: '',
  description: '',
  imgUrl: '',
  isRequiredPresentation: true,
  isUpdate: false,
}
