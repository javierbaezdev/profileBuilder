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
  startYear: Yup.string().required(SCHEMA_MESSAGES.required),
  endYear: Yup.string(),
  type: Yup.string().required(SCHEMA_MESSAGES.required),
})

export const experienceSchema = Yup.object().shape({
  works: Yup.array().of(workSchema).min(1, SCHEMA_MESSAGES.required),
  isRequiredExperience: Yup.boolean(),
  isUpdate: Yup.boolean(),
})

export const educationSchema = Yup.object().shape({
  institutions: Yup.array()
    .of(
      Yup.object().shape({
        key: Yup.string().required(SCHEMA_MESSAGES.required),
        educationName: Yup.string().required(SCHEMA_MESSAGES.required),
        description: Yup.string(),
        startYear: Yup.string().required(SCHEMA_MESSAGES.required),
        endYear: Yup.string(),
      })
    )
    .min(1, SCHEMA_MESSAGES.required),
})

export const skillsSchema = Yup.object().shape({
  skills: Yup.array()
    .of(
      Yup.object().shape({
        key: Yup.string().required(SCHEMA_MESSAGES.required),
        value: Yup.string().required(SCHEMA_MESSAGES.required),
      })
    )
    .min(1, SCHEMA_MESSAGES.required),
})

export const contactSchema = Yup.object().shape({
  contacts: Yup.array()
    .of(
      Yup.object().shape({
        key: Yup.string().required(SCHEMA_MESSAGES.required),
        label: Yup.string().required(SCHEMA_MESSAGES.required),
        value: Yup.string().required(SCHEMA_MESSAGES.required),
      })
    )
    .min(1, SCHEMA_MESSAGES.required),
})
