import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { showToast } from '@/shared/utils/sonnerToast'
import {
  PresentationFrom,
  initialValuesPresentation,
} from './components/FormContainer/validation/initialValues'

interface State {
  templateSelected: 'BASIC'
  presentationData: PresentationFrom
  setPresentationData: (
    presentation: PresentationFrom,
    isUpdate: boolean
  ) => void
  resetData: (type: string) => void
}

export const useBuilderStore = create<State>()(
  devtools(
    persist(
      (set) => {
        return {
          templateSelected: 'BASIC',
          presentationData: initialValuesPresentation,
          setPresentationData: (presentation, isUpdate) => {
            set({
              presentationData: presentation,
            })
            showToast({
              msg: `Presentación ${
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
              message = `Presentación reseteada correctamente🎉`
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
