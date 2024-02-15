export interface Presentation {
  fullName: string
  description?: string
  imgUrl?: string
}

export interface About {
  description?: string
}

export type WorkType = 'REMOTE' | 'IN_PERSON' | 'FREELANCE'
export interface Work {
  key: string
  description?: string
  position: string
  companyName: string
  startYear: string
  endYear?: string
  type: WorkType
}

export interface Experience {
  works: Work[]
}

export interface Institution {
  key: string
  educationName: string
  description?: string
  startYear: string
  endYear?: string
}

export interface Education {
  institutions: Institution[]
}

export interface SkillsItem {
  key: string
  value: string
}

export interface Skills {
  skills: SkillsItem[]
}

export interface ContactItem {
  key: string
  label: string
  value: string
}

export interface Contact {
  contacts: ContactItem[]
}

export interface BuilderFormCreate {
  presentation: Presentation
  about: About
  experience: Experience
  education: Education
  skills: Skills
  contact: Contact
}
