import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { showToast } from '@/shared/utils/sonnerToast'
import {
  PresentationFrom,
  initialValuesPresentation,
} from './components/FormContainer/validation/initialValues'
import trimObjectValues from '@/shared/utils/trimObjectValues'

interface State {
  templateSelected: 'BASIC'
  presentationData: PresentationFrom
  setPresentationData: (presentation: PresentationFrom) => void
  resetData: (type: string) => void
}

export const useBuilderStore = create<State>()(
  devtools(
    persist(
      (set) => {
        return {
          templateSelected: 'BASIC',
          presentationData: initialValuesPresentation,
          setPresentationData: (presentation) => {
            const presentationFormat = trimObjectValues(presentation)
            const isUpdate = presentationFormat.isUpdate
            set({
              presentationData: { ...presentationFormat, isUpdate: true },
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
