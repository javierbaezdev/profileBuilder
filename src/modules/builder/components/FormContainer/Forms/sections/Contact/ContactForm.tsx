import { ContactItem } from '@/modules/builder/types'
import { SimpleModal } from '@/shared/components/modals'
import { useFormik } from 'formik'
import { initialValuesContact } from '@/modules/builder/components/FormContainer/validation/initialValues'
import { contactSchema } from '@/modules/builder/components/FormContainer/validation/schema'
import { generateId } from '@/shared/utils/generate'
import { SimpleInput } from '@/shared/components/inputs'
import { Flex } from '@chakra-ui/react'
import { useEffect } from 'react'
import { SimpleButton } from '@/shared/components/buttons'
import { DeviceFloppy } from '@/shared/icons'
import trimObjectValues from '@/shared/utils/trimObjectValues'
import placeHolders from '@/modules/builder/components/FormContainer/Forms/placeHolders.json'

interface Props {
  data?: ContactItem
  isOpen: boolean
  onClose: () => void
  addNewContact: (contact: ContactItem) => void
  updateDataContact: (contact: ContactItem) => void
}

const ContactFormComponent = ({
  data,
  onClose,
  isOpen,
  addNewContact,
  updateDataContact,
}: Props) => {
  const initialValues = { ...initialValuesContact, key: generateId() }
  const formik = useFormik<ContactItem>({
    initialValues,
    validationSchema: contactSchema,
    onSubmit: async (values) => {
      const formatValues = trimObjectValues(values)
      if (!data) {
        addNewContact(formatValues)
      }
      if (data) {
        updateDataContact(formatValues)
      }
      formik.resetForm()
      onClose()
    },
  })

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
      modalHeader={!data ? 'Agregar contacto' : 'Actualizar contacto'}
    >
      <Flex
        direction='column'
        gap={2}
      >
        <SimpleInput
          name='label'
          label='Título'
          value={formik.values.label}
          errorMsg={formik.errors?.label}
          onChange={formik.handleChange}
          placeholder={placeHolders.CONTACT.LABEL}
        />
        <SimpleInput
          name='value'
          label='Valor'
          value={formik.values.value}
          errorMsg={formik.errors?.value}
          onChange={formik.handleChange}
          placeholder={placeHolders.CONTACT.VALUE}
        />

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

export default ContactFormComponent
