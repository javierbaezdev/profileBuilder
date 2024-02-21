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
} from '@/shared/components/inputs'
import { Flex } from '@chakra-ui/react'

interface Props {
  data?: Work
  isOpen: boolean
  onClose: () => void
}

const WorkForm = ({ data, onClose, isOpen }: Props) => {
  const formik = useFormik<Work>({
    initialValues: data ? data : { ...initialValuesWork, key: generateId() },
    validationSchema: workSchema,
    onSubmit: async (values) => {
      console.log({ values })
    },
  })
  return (
    <SimpleModal
      isOpen={isOpen}
      onClose={onClose}
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
        </Flex>
      </Flex>
    </SimpleModal>
  )
}

export default WorkForm
