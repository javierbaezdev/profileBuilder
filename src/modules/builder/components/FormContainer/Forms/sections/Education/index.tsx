import { useEffect, useState } from 'react'
import { Flex, Text, useDisclosure } from '@chakra-ui/react'
import { useFormik } from 'formik'
import {
  EducationFrom,
  initialValuesEducation,
} from '@/modules/builder/components/FormContainer/validation/initialValues'
import { educationSchema } from '@/modules/builder/components/FormContainer/validation/schema'
import { SimpleButton } from '@/shared/components/buttons'
import { CirclePlus, DeviceFloppy } from '@/shared/icons'
import { useBuilderStore } from '@/modules/builder/store'
import { Institution } from '@/modules/builder/types'
import { Message } from '@/shared/components'
import { cloneDeep } from '@/shared/utils/cloneDeep'
import InstitutionItem from './InstitutionItem'
import InstitutionForm from './InstitutionForm'

const EducationForm = () => {
  const { isOpen, onToggle } = useDisclosure()
  const [currentInstitutionSelected, setCurrentInstitutionSelected] = useState<
    Institution | undefined
  >(undefined)
  const { educationData, setEducationData } = useBuilderStore((store) => store)
  const formik = useFormik<EducationFrom>({
    initialValues: initialValuesEducation,
    validationSchema: educationSchema,
    onSubmit: async (values) => {
      setEducationData(values)
    },
  })

  const addNewInstitutionOpen = () => {
    if (currentInstitutionSelected) {
      setCurrentInstitutionSelected(undefined)
    }
    onToggle()
  }

  const addNewInstitution = (institution: Institution) => {
    const copyInstitutions = cloneDeep(formik.values.institutions)

    const newInstitutions = [institution, ...copyInstitutions]

    formik.setFieldValue('institutions', newInstitutions)
  }

  const updateDataInstitution = (institution: Institution) => {
    const copyInstitutions = cloneDeep(formik.values.institutions)

    const indexCurrent = copyInstitutions.findIndex(
      (item) => item.key === institution.key
    )

    if (indexCurrent > -1) {
      copyInstitutions[indexCurrent] = institution
    }

    formik.setFieldValue('institutions', copyInstitutions)
  }

  const updateInstitution = (institution: Institution) => {
    setCurrentInstitutionSelected(institution)
    onToggle()
  }

  const deleteInstitution = (institution: Institution) => {
    const copyInstitutions = cloneDeep(formik.values.institutions)
    const newInstitutions = copyInstitutions.filter(
      (item) => item.key !== institution.key
    )
    formik.setFieldValue('institutions', newInstitutions)
  }

  useEffect(() => {
    formik.setValues(educationData)
  }, [educationData])

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
          Listado de institución educativas
        </Text>
        {formik.values?.institutions?.length === 0 && (
          <Message
            msg='Tu lista está vacía'
            description='Actualmente no hay ningúna institución agregado. Haz clic en "Agregar nueva institución".'
            type='info'
          />
        )}
        <Flex
          direction='column'
          gap={2}
          px={5}
        >
          {formik.values?.institutions?.map((institution) => (
            <InstitutionItem
              key={institution.key}
              data={institution}
              updateInstitution={updateInstitution}
              deleteInstitution={deleteInstitution}
            />
          ))}
          <SimpleButton
            rightIcon={<CirclePlus />}
            onClick={() => addNewInstitutionOpen()}
            size='xs'
            iconSpacing={1}
          >
            Agregar nueva institución
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
        <InstitutionForm
          isOpen={isOpen}
          onClose={onToggle}
          data={currentInstitutionSelected}
          addNewInstitution={addNewInstitution}
          updateDataInstitution={updateDataInstitution}
        />
      )}
    </Flex>
  )
}

export default EducationForm
