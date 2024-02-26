import * as Yup from 'yup'
import { SCHEMA_MESSAGES } from '@/shared/constants'

export const presentationSchema = Yup.object().shape({
  fullName: Yup.string()
    .max(43, SCHEMA_MESSAGES.maxCha + 43)
    .required(SCHEMA_MESSAGES.required),
  description: Yup.string().max(100, SCHEMA_MESSAGES.maxCha + 100),
  location: Yup.string().max(40, SCHEMA_MESSAGES.maxCha + 40),
  imgUrl: Yup.string(),
  isRequiredPresentation: Yup.boolean(),
  isUpdate: Yup.boolean(),
})

export const aboutSchema = Yup.object().shape({
  description: Yup.string().max(630, SCHEMA_MESSAGES.maxCha + 630),
  isRequiredAbout: Yup.boolean(),
  isRequiredPresentation: Yup.boolean(),
  isUpdate: Yup.boolean(),
})

export const workSchema = Yup.object().shape({
  key: Yup.string().required(SCHEMA_MESSAGES.required),
  description: Yup.string().max(100, SCHEMA_MESSAGES.maxCha + 100),
  position: Yup.string()
    .max(30, SCHEMA_MESSAGES.maxCha + 30)
    .required(SCHEMA_MESSAGES.required),
  companyName: Yup.string()
    .max(30, SCHEMA_MESSAGES.maxCha + 30)
    .required(SCHEMA_MESSAGES.required),
  isCurrent: Yup.boolean(),
  startDate: Yup.string().required(SCHEMA_MESSAGES.required),
  endDate: Yup.string().when('isCurrent', {
    is: false,
    then: Yup.string().required(SCHEMA_MESSAGES.required),
    otherwise: Yup.string(),
  }),
  type: Yup.string().required(SCHEMA_MESSAGES.required),
})

export const experienceSchema = Yup.object().shape({
  works: Yup.array().of(workSchema).min(1, SCHEMA_MESSAGES.required),
  isRequiredExperience: Yup.boolean(),
  isUpdate: Yup.boolean(),
})

export const institutionSchema = Yup.object().shape({
  key: Yup.string().required(SCHEMA_MESSAGES.required),
  educationName: Yup.string().required(SCHEMA_MESSAGES.required),
  description: Yup.string(),
  isCurrent: Yup.boolean(),
  startDate: Yup.string().required(SCHEMA_MESSAGES.required),
  endDate: Yup.string().when('isCurrent', {
    is: false,
    then: Yup.string().required(SCHEMA_MESSAGES.required),
    otherwise: Yup.string(),
  }),
})

export const educationSchema = Yup.object().shape({
  institutions: Yup.array().of(institutionSchema),
  isRequiredEducation: Yup.boolean(),
  isUpdate: Yup.boolean(),
})

export const skillSchema = Yup.object().shape({
  key: Yup.string().required(SCHEMA_MESSAGES.required),
  value: Yup.string()
    .required(SCHEMA_MESSAGES.required)
    .max(20, SCHEMA_MESSAGES.maxCha + 20),
})

export const skillsSchema = Yup.object().shape({
  skills: Yup.array().of(skillSchema),
  isRequiredSkills: Yup.boolean(),
  isUpdate: Yup.boolean(),
})

export const contactSchema = Yup.object().shape({
  key: Yup.string().required(SCHEMA_MESSAGES.required),
  label: Yup.string()
    .required(SCHEMA_MESSAGES.required)
    .max(10, SCHEMA_MESSAGES.maxCha + 10),
  value: Yup.string()
    .required(SCHEMA_MESSAGES.required)
    .max(30, SCHEMA_MESSAGES.maxCha + 30),
})

export const contactsSchema = Yup.object().shape({
  contacts: Yup.array().of(contactSchema),
  isRequiredContact: Yup.boolean(),
  isUpdate: Yup.boolean(),
})
