import { useEffect, useState } from 'react'
import { Flex, Text, useDisclosure } from '@chakra-ui/react'
import { useFormik } from 'formik'
import {
  ContactFrom,
  initialValuesContacts,
} from '@/modules/builder/components/FormContainer/validation/initialValues'
import { contactsSchema } from '@/modules/builder/components/FormContainer/validation/schema'
import { SimpleButton } from '@/shared/components/buttons'
import { CirclePlus, DeviceFloppy } from '@/shared/icons'
import { useBuilderStore } from '@/modules/builder/store'
import { ContactItem } from '@/modules/builder/types'
import { Message } from '@/shared/components'
import { cloneDeep } from '@/shared/utils/cloneDeep'
import ContactItemComponent from './ContactItem'
import ContactFormComponent from './ContactForm'
import { GET_IS_SMALL_SCREAM } from '@/shared/constants'

const ContactsForm = () => {
  const isSmallScream = GET_IS_SMALL_SCREAM()
  const { isOpen, onToggle } = useDisclosure()
  const [currentContactSelected, setCurrentContactSelected] = useState<
    ContactItem | undefined
  >(undefined)

  const { contactsData, setContactsData } = useBuilderStore((store) => store)

  const formik = useFormik<ContactFrom>({
    initialValues: initialValuesContacts,
    validationSchema: contactsSchema,
    onSubmit: async (values) => {
      setContactsData(values)
    },
  })

  const addNewContactOpen = () => {
    if (currentContactSelected) {
      setCurrentContactSelected(undefined)
    }
    onToggle()
  }

  const addNewContact = (contact: ContactItem) => {
    const copyContacts = cloneDeep(formik.values.contacts)

    const newContact = [...copyContacts, contact]

    formik.setFieldValue('contacts', newContact)
  }

  const updateDataContact = (contact: ContactItem) => {
    const copyContacts = cloneDeep(formik.values.contacts)

    const indexCurrent = copyContacts.findIndex(
      (item) => item.key === contact.key
    )

    if (indexCurrent > -1) {
      copyContacts[indexCurrent] = contact
    }

    formik.setFieldValue('contacts', copyContacts)
  }

  const updateContact = (contact: ContactItem) => {
    setCurrentContactSelected(contact)
    onToggle()
  }

  const deleteContact = (contact: ContactItem) => {
    const copyContacts = cloneDeep(formik.values.contacts)
    const newContacts = copyContacts.filter((item) => item.key !== contact.key)
    formik.setFieldValue('contacts', newContacts)
  }

  useEffect(() => {
    formik.setValues(contactsData)
  }, [contactsData])

  return (
    <Flex
      direction='column'
      gap={4}
      w='full'
    >
      <Flex
        direction='column'
        gap={2}
      >
        <Text
          textAlign='center'
          fontSize={18}
        >
          Listado de contactos
        </Text>
        {formik.values?.contacts?.length === 0 && (
          <Message
            msg='Tu lista está vacía'
            description='Actualmente no hay ningún contacto agregado. Haz clic en "Agregar nuevo contacto".'
            type='info'
          />
        )}
        <Flex
          direction='column'
          gap={2}
          px={!isSmallScream ? 5 : 2}
        >
          {formik.values?.contacts?.length > 0 && (
            <Flex
              gap={2}
              border='1px solid'
              borderColor='zinc.300'
              p={2}
              borderRadius={8}
              w='full'
              direction='column'
            >
              {formik.values?.contacts?.map((contact) => (
                <ContactItemComponent
                  key={contact.key}
                  data={contact}
                  updateContact={updateContact}
                  deleteContact={deleteContact}
                />
              ))}
            </Flex>
          )}

          <SimpleButton
            rightIcon={<CirclePlus />}
            onClick={() => addNewContactOpen()}
            size='xs'
            iconSpacing={1}
          >
            Agregar nuevo contacto
          </SimpleButton>
        </Flex>
      </Flex>
      <Flex justify='flex-end'>
        <SimpleButton
          rightIcon={<DeviceFloppy />}
          onClick={() => formik.handleSubmit()}
          size='xs'
          iconSpacing={1}
        >
          {formik.values.isUpdate ? 'Actualizar' : 'Guardar'}
        </SimpleButton>
      </Flex>
      {isOpen && (
        <ContactFormComponent
          isOpen={isOpen}
          onClose={onToggle}
          data={currentContactSelected}
          addNewContact={addNewContact}
          updateDataContact={updateDataContact}
        />
      )}
    </Flex>
  )
}

export default ContactsForm
