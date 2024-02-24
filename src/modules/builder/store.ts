import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { showToast } from '@/shared/utils/sonnerToast'
import {
  AboutFrom,
  PresentationFrom,
  ExperienceFrom,
  initialValuesExperience,
  initialValuesAbout,
  initialValuesPresentation,
  EducationFrom,
  initialValuesEducation,
} from './components/FormContainer/validation/initialValues'
import trimObjectValues from '@/shared/utils/trimObjectValues'
import { Language, Templates } from './types'

interface State {
  templateSelected: Templates
  language: Language
  presentationData: PresentationFrom
  aboutData: AboutFrom
  experienceData: ExperienceFrom
  educationData: EducationFrom
  onChangeLanguage: (language: Language) => void
  setPresentationData: (presentation: PresentationFrom) => void
  setAboutData: (about: AboutFrom) => void
  setExperienceData: (experience: ExperienceFrom) => void
  setEducationData: (education: EducationFrom) => void
  resetData: (type: string) => void
}

export const useBuilderStore = create<State>()(
  devtools(
    persist(
      (set, get) => {
        return {
          templateSelected: 'BASIC',
          language: 'ES',
          presentationData: initialValuesPresentation,
          aboutData: initialValuesAbout,
          experienceData: initialValuesExperience,
          educationData: initialValuesEducation,
          onChangeLanguage: (lgs) => {
            const { language } = get()

            if (language !== lgs) {
              set({
                language: lgs,
              })
              showToast({
                msg: `Idioma actualizado correctamente 🎉`,
                type: 'success',
              })
            }
          },
          setPresentationData: (presentation) => {
            const presentationFormat = trimObjectValues(presentation)
            const isUpdate = presentationFormat.isUpdate
            set({
              presentationData: { ...presentationFormat, isUpdate: true },
            })
            showToast({
              msg: `"Presentación" ${
                isUpdate ? 'actualizada' : 'agregada'
              } correctamente 🎉`,
              type: 'success',
            })
          },
          setAboutData: (data) => {
            const dataFormat = trimObjectValues(data)
            const isUpdate = dataFormat.isUpdate
            set({
              aboutData: { ...dataFormat, isUpdate: true },
            })
            showToast({
              msg: `"Acerca de mi" ${
                isUpdate ? 'actualizada' : 'agregada'
              } correctamente 🎉`,
              type: 'success',
            })
          },
          setExperienceData: (data) => {
            const { works, ...rest } = data
            const dataFormat = trimObjectValues(rest)
            const isUpdate = dataFormat.isUpdate
            set({
              experienceData: { works, ...rest, isUpdate: true },
            })
            showToast({
              msg: `"Experiencia" ${
                isUpdate ? 'actualizada' : 'agregada'
              } correctamente 🎉`,
              type: 'success',
            })
          },
          setEducationData: (data) => {
            const { institutions, ...rest } = data
            const dataFormat = trimObjectValues(rest)
            const isUpdate = dataFormat.isUpdate
            set({
              educationData: { institutions, ...rest, isUpdate: true },
            })
            showToast({
              msg: `"Educación" ${
                isUpdate ? 'actualizada' : 'agregada'
              } correctamente 🎉`,
              type: 'success',
            })
          },
          resetData: (type) => {
            let message = ''
            if (type === 'PRESENTATION') {
              set({
                presentationData: initialValuesPresentation,
              })
              message = `"Presentación" reseteada correctamente 🎉`
            }
            if (type === 'ABOUT') {
              set({
                aboutData: initialValuesAbout,
              })
              message = `"Acerca de mi" reseteada correctamente 🎉`
            }
            if (type === 'EXPERIENCE') {
              set({
                experienceData: initialValuesExperience,
              })
              message = `"Experiencia" reseteada correctamente 🎉`
            }
            showToast({
              msg: message,
              type: 'success',
            })
          },
        }
      },
      {
        name: 'builder',
      }
    )
  )
)
