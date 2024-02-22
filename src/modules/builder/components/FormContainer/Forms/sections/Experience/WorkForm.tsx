import { Work } from '@/modules/builder/types'
import { SimpleModal } from '@/shared/components/modals'
import { useFormik } from 'formik'
import { initialValuesWork } from '@/modules/builder/components/FormContainer/validation/initialValues'
import { workSchema } from '@/modules/builder/components/FormContainer/validation/schema'
import { generateId } from '@/shared/utils/generate'
import {
  DatePicker,
  SimpleInput,
  SimpleTextArea,
  SwitchInput,
} from '@/shared/components/inputs'
import { Flex } from '@chakra-ui/react'
import { useEffect } from 'react'
import { SimpleButton } from '@/shared/components/buttons'
import { DeviceFloppy } from '@/shared/icons'

interface Props {
  data?: Work
  isOpen: boolean
  onClose: () => void
  addNewWork: (work: Work) => void
}

const WorkForm = ({ data, onClose, isOpen, addNewWork }: Props) => {
  const initialValues = { ...initialValuesWork, key: generateId() }
  const formik = useFormik<Work>({
    initialValues,
    validationSchema: workSchema,
    onSubmit: async (values) => {
      addNewWork(values)
      formik.resetForm()
      onClose()
    },
  })

  useEffect(() => {
    if (!formik.values?.isCurrent && formik.values?.endDate) {
      formik.setFieldValue('endDate', undefined)
    }
  }, [formik.values?.isCurrent])

  useEffect(() => {
    if (data) {
      formik.setValues(data)
    }
  }, [data])

  return (
    <SimpleModal
      isOpen={isOpen}
      onClose={() => {
        formik.resetForm()
        onClose()
      }}
      modalHeader={!data ? 'Agregar trabajo' : 'Actualizar trabajo'}
    >
      <Flex
        direction='column'
        gap={2}
      >
        <SimpleInput
          name='companyName'
          label='Nombre de la organización'
          value={formik.values.companyName}
          errorMsg={formik.errors?.companyName}
          onChange={formik.handleChange}
        />
        <SimpleInput
          name='position'
          label='Cargo'
          value={formik.values.position}
          errorMsg={formik.errors?.position}
          onChange={formik.handleChange}
        />
        <SimpleTextArea
          name='description'
          label='Descripción'
          value={formik.values?.description}
          errorMsg={formik.errors?.description}
          onChange={formik.handleChange}
        />
        <SwitchInput
          label='¿Estás trabajando actualmente aquí?'
          isChecked={formik.values?.isCurrent}
          name='isCurrent'
          onChange={formik.handleChange}
        />
        <Flex gap={2}>
          <DatePicker
            label='Fecha desde'
            dateValue={
              formik.values?.startDate
                ? new Date(formik.values?.startDate)
                : undefined
            }
            onChange={(date) =>
              formik.setFieldValue('startDate', date?.toISOString())
            }
          />
          {!formik.values?.isCurrent && (
            <DatePicker
              label='Fecha hasta'
              dateValue={
                formik.values?.endDate
                  ? new Date(formik.values?.endDate)
                  : undefined
              }
              onChange={(date) =>
                formik.setFieldValue('endDate', date?.toISOString())
              }
            />
          )}
        </Flex>
        <Flex justify='flex-end'>
          <SimpleButton
            rightIcon={<DeviceFloppy />}
            onClick={() => formik.handleSubmit()}
            size='xs'
            iconSpacing={1}
          >
            {data ? 'Actualizar' : 'Guardar'}
          </SimpleButton>
        </Flex>
      </Flex>
    </SimpleModal>
  )
}

export default WorkForm
