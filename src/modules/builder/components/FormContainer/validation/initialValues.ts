import {
  About,
  Institution,
  Presentation,
  Work,
  Skills,
  SkillsItem,
  Contact,
  ContactItem,
} from '@/modules/builder/types'

export interface PresentationFrom extends Presentation {
  isRequiredPresentation: boolean
  isUpdate: boolean
}

export interface AboutFrom extends About {
  isRequiredAbout: boolean
  isUpdate: boolean
}

export interface ExperienceFrom {
  works: Work[]
  isRequiredExperience: boolean
  isUpdate: boolean
}

export interface EducationFrom {
  institutions: Institution[]
  isRequiredEducation: boolean
  isUpdate: boolean
}

export interface SkillsFrom extends Skills {
  isRequiredSkills: boolean
  isUpdate: boolean
}

export interface ContactFrom extends Contact {
  isRequiredContact: boolean
  isUpdate: boolean
}

/* --- */

export const initialValuesPresentation: PresentationFrom = {
  fullName: '',
  description: '',
  location: '',
  imgUrl: '',
  isRequiredPresentation: true,
  isUpdate: false,
}

export const initialValuesAbout: AboutFrom = {
  description: '',
  isRequiredAbout: true,
  isUpdate: false,
}

export const initialValuesWork: Work = {
  key: '',
  companyName: '',
  position: '',
  startDate: '',
  description: '',
  endDate: undefined,
  isCurrent: false,
  type: 'REMOTE',
}

export const initialValuesInstitution: Institution = {
  key: '',
  educationName: '',
  isCurrent: false,
  startDate: '',
  endDate: undefined,
  description: '',
}

export const initialValuesSkill: SkillsItem = {
  key: '',
  value: '',
}

export const initialValuesContact: ContactItem = {
  key: '',
  value: '',
  label: '',
}

export const initialValuesExperience: ExperienceFrom = {
  works: [],
  isRequiredExperience: true,
  isUpdate: false,
}

export const initialValuesEducation: EducationFrom = {
  institutions: [],
  isRequiredEducation: true,
  isUpdate: false,
}

export const initialValuesSkills: SkillsFrom = {
  skills: [],
  isRequiredSkills: true,
  isUpdate: false,
}

export const initialValuesContacts: ContactFrom = {
  contacts: [],
  isRequiredContact: true,
  isUpdate: false,
}
