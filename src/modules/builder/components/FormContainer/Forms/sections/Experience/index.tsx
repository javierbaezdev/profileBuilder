import { useEffect, useState } from 'react'
import { Flex, Text, useDisclosure } from '@chakra-ui/react'
import { useFormik } from 'formik'
import {
  ExperienceFrom,
  initialValuesExperience,
} from '@/modules/builder/components/FormContainer/validation/initialValues'
import { experienceSchema } from '@/modules/builder/components/FormContainer/validation/schema'
import { SimpleButton } from '@/shared/components/buttons'
import { CircleMinus, DeviceFloppy } from '@/shared/icons'
import { useBuilderStore } from '@/modules/builder/store'
import { Work } from '@/modules/builder/types'
import WorkForm from './WorkForm'
import WorkItem from './WorkItem'

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
  const selectedWork = (work: Work | undefined) => {
    setCurrentWorkSelected(work)
  }

  const addNewWork = () => {
    if (currentWorkSelected) {
      setCurrentWorkSelected(undefined)
    }
    onToggle()
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
        <Flex
          direction='column'
          gap={2}
          px={10}
        >
          {formik.values?.works?.map((work) => (
            <WorkItem
              key={work.key}
              data={work}
              selectedWork={selectedWork}
            />
          ))}
          <SimpleButton
            variant='outline'
            rightIcon={<CircleMinus />}
            onClick={() => addNewWork()}
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
        />
      )}
    </Flex>
  )
}

export default ExperienceForm
