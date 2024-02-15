import { BuilderFormCreate } from '@/modules/builder/types'

export interface BuilderFrom extends BuilderFormCreate {
  isRequiredPresentation: boolean
  isRequiredAbout: boolean
  isRequiredExperience: boolean
  isRequiredEducation: boolean
  isRequiredSkills: boolean
  isRequiredContact: boolean
}

export const initialValues: BuilderFrom = {
  presentation: {
    fullName: '',
    description: '',
    imgUrl: undefined,
  },
  about: {
    description: '',
  },
  experience: {
    works: [],
  },
  education: {
    institutions: [],
  },
  skills: {
    skills: [],
  },
  contact: {
    contacts: [],
  },
  isRequiredPresentation: true,
  isRequiredAbout: true,
  isRequiredExperience: true,
  isRequiredEducation: true,
  isRequiredSkills: true,
  isRequiredContact: true,
}
