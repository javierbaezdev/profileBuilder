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
} from './components/FormContainer/validation/initialValues'
import trimObjectValues from '@/shared/utils/trimObjectValues'

interface State {
  templateSelected: 'BASIC'
  presentationData: PresentationFrom
  aboutData: AboutFrom
  experienceData: ExperienceFrom
  setPresentationData: (presentation: PresentationFrom) => void
  setAboutData: (about: AboutFrom) => void
  setExperienceData: (experience: ExperienceFrom) => void
  resetData: (type: string) => void
}

export const useBuilderStore = create<State>()(
  devtools(
    persist(
      (set) => {
        return {
          templateSelected: 'BASIC',
          presentationData: initialValuesPresentation,
          aboutData: initialValuesAbout,
          experienceData: initialValuesExperience,
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
            const dataFormat = trimObjectValues(data)
            const isUpdate = dataFormat.isUpdate
            set({
              experienceData: { ...dataFormat, isUpdate: true },
            })
            showToast({
              msg: `"Experiencia" ${
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
