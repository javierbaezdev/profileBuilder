import { useEffect, useState } from 'react'
import { Flex, Text, useDisclosure } from '@chakra-ui/react'
import { useFormik } from 'formik'
import {
  ExperienceFrom,
  initialValuesExperience,
} from '@/modules/builder/components/FormContainer/validation/initialValues'
import { experienceSchema } from '@/modules/builder/components/FormContainer/validation/schema'
import { SimpleButton } from '@/shared/components/buttons'
import { CirclePlus, DeviceFloppy } from '@/shared/icons'
import { useBuilderStore } from '@/modules/builder/store'
import { Work } from '@/modules/builder/types'
import WorkForm from './WorkForm'
import WorkItem from './WorkItem'
import { Message } from '@/shared/components'
import { cloneDeep } from '@/shared/utils/cloneDeep'

const ExperienceForm = () => {
  const { isOpen, onToggle } = useDisclosure()
  const [currentWorkSelected, setCurrentWorkSelected] = useState<
    Work | undefined
  >(undefined)
  const { experienceData, setExperienceData } = useBuilderStore(
    (store) => store
  )
  const formik = useFormik<ExperienceFrom>({
    initialValues: initialValuesExperience,
    validationSchema: experienceSchema,
    onSubmit: async (values) => {
      setExperienceData(values)
    },
  })

  const addNewWorkOpen = () => {
    if (currentWorkSelected) {
      setCurrentWorkSelected(undefined)
    }
    onToggle()
  }

  const addNewWork = (work: Work) => {
    const copyWorks = cloneDeep(formik.values.works)

    const newWorks = [work, ...copyWorks]

    formik.setFieldValue('works', newWorks)
  }

  const updateWork = (work: Work) => {
    setCurrentWorkSelected(work)
    onToggle()
  }

  const deleteWork = (work: Work) => {
    const copyWorks = cloneDeep(formik.values.works)
    const newWorks = copyWorks.filter((item) => item.key !== work.key)
    formik.setFieldValue('works', newWorks)
  }

  useEffect(() => {
    formik.setValues(experienceData)
  }, [experienceData])

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
        <Text textAlign='center'>
          Listado de trabajos/experiencias laborales
        </Text>
        {formik.values?.works?.length === 0 && (
          <Message
            msg='Tu lista está vacía'
            description='Actualmente no hay ningún trabajo agregado. Haz clic en "Agregar nuevo trabajo".'
            type='info'
          />
        )}
        <Flex
          direction='column'
          gap={2}
          px={10}
        >
          {formik.values?.works?.map((work) => (
            <WorkItem
              key={work.key}
              data={work}
              updateWork={updateWork}
              deleteWork={deleteWork}
            />
          ))}
          <SimpleButton
            variant='outline'
            rightIcon={<CirclePlus />}
            onClick={() => addNewWorkOpen()}
            size='xs'
            iconSpacing={1}
          >
            Agregar nuevo trabajo
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
        <WorkForm
          isOpen={isOpen}
          onClose={onToggle}
          data={currentWorkSelected}
          addNewWork={addNewWork}
        />
      )}
    </Flex>
  )
}

export default ExperienceForm
