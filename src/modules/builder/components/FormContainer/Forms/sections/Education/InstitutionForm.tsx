import { Institution } from '@/modules/builder/types'
import { SimpleModal } from '@/shared/components/modals'
import { useFormik } from 'formik'
import { initialValuesInstitution } from '@/modules/builder/components/FormContainer/validation/initialValues'
import { institutionSchema } from '@/modules/builder/components/FormContainer/validation/schema'
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
import trimObjectValues from '@/shared/utils/trimObjectValues'
import placeHolders from '@/modules/builder/components/FormContainer/Forms/placeHolders.json'
import { GET_IS_SMALL_SCREAM } from '@/shared/constants'

interface Props {
  data?: Institution
  isOpen: boolean
  onClose: () => void
  addNewInstitution: (institution: Institution) => void
  updateDataInstitution: (institution: Institution) => void
}

const InstitutionForm = ({
  data,
  onClose,
  isOpen,
  addNewInstitution,
  updateDataInstitution,
}: Props) => {
  const isSmallScream = GET_IS_SMALL_SCREAM()
  const initialValues = { ...initialValuesInstitution, key: generateId() }
  const formik = useFormik<Institution>({
    initialValues,
    validationSchema: institutionSchema,
    onSubmit: async (values) => {
      const formatValues = trimObjectValues(values)
      if (!data) {
        addNewInstitution(formatValues)
      }
      if (data) {
        updateDataInstitution(formatValues)
      }
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
      modalHeader={!data ? 'Agregar Institución' : 'Actualizar Institución'}
    >
      <Flex
        direction='column'
        gap={2}
      >
        <SimpleInput
          name='educationName'
          label='Nombre de la institución'
          value={formik.values.educationName}
          errorMsg={formik.errors?.educationName}
          onChange={formik.handleChange}
          placeholder={placeHolders.EDUCATION.INSTITUTION_NAME}
        />
        <SimpleTextArea
          name='description'
          label='Descripción'
          value={formik.values?.description}
          errorMsg={formik.errors?.description}
          onChange={formik.handleChange}
          placeholder={placeHolders.EDUCATION.DESCRIPTION}
        />
        <SwitchInput
          label='¿Estás estudiando actualmente aquí?'
          isChecked={formik.values?.isCurrent}
          name='isCurrent'
          onChange={formik.handleChange}
        />
        <Flex
          gap={2}
          direction={!isSmallScream ? 'row' : 'column'}
        >
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
            errorMsg={formik.errors.startDate}
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
              errorMsg={formik.errors.endDate}
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

export default InstitutionForm
