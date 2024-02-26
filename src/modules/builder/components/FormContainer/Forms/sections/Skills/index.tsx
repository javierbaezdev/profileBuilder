import { useEffect, useState } from 'react'
import { Flex, Text, useDisclosure } from '@chakra-ui/react'
import { useFormik } from 'formik'
import {
  SkillsFrom,
  initialValuesSkills,
} from '@/modules/builder/components/FormContainer/validation/initialValues'
import { skillsSchema } from '@/modules/builder/components/FormContainer/validation/schema'
import { SimpleButton } from '@/shared/components/buttons'
import { CirclePlus, DeviceFloppy } from '@/shared/icons'
import { useBuilderStore } from '@/modules/builder/store'
import { SkillsItem } from '@/modules/builder/types'
import { Message } from '@/shared/components'
import { cloneDeep } from '@/shared/utils/cloneDeep'
import SkillItem from './SkillItem'
import SkillsFormComponent from './SkillsForm'
import { GET_IS_SMALL_SCREAM } from '@/shared/constants'

const SkillsForm = () => {
  const isSmallScream = GET_IS_SMALL_SCREAM()

  const { isOpen, onToggle } = useDisclosure()

  const [currentSkillSelected, setCurrentSkillSelected] = useState<
    SkillsItem | undefined
  >(undefined)

  const { skillsData, setSkillsData } = useBuilderStore((store) => store)

  const formik = useFormik<SkillsFrom>({
    initialValues: initialValuesSkills,
    validationSchema: skillsSchema,
    onSubmit: async (values) => {
      setSkillsData(values)
    },
  })

  const addNewSkillOpen = () => {
    if (currentSkillSelected) {
      setCurrentSkillSelected(undefined)
    }
    onToggle()
  }

  const addNewSkill = (skill: SkillsItem) => {
    const copyInstitutions = cloneDeep(formik.values.skills)

    const newSkills = [skill, ...copyInstitutions]

    formik.setFieldValue('skills', newSkills)
  }

  const updateDataSkill = (skill: SkillsItem) => {
    const copySkills = cloneDeep(formik.values.skills)

    const indexCurrent = copySkills.findIndex((item) => item.key === skill.key)

    if (indexCurrent > -1) {
      copySkills[indexCurrent] = skill
    }

    formik.setFieldValue('skills', copySkills)
  }

  const deleteSkill = (skill: SkillsItem) => {
    const copySkills = cloneDeep(formik.values.skills)
    const newSkills = copySkills.filter((item) => item.key !== skill.key)
    formik.setFieldValue('skills', newSkills)
  }

  useEffect(() => {
    formik.setValues(skillsData)
  }, [skillsData])

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
          Listado de habilidades
        </Text>
        {formik.values?.skills?.length === 0 && (
          <Message
            msg='Tu lista está vacía'
            description='Actualmente no hay ningúna habilidad agregado. Haz clic en "Agregar nueva habilidad".'
            type='info'
          />
        )}
        <Flex
          direction='column'
          gap={2}
          px={!isSmallScream ? 5 : 2}
        >
          {formik.values?.skills?.length > 0 && (
            <Flex
              gap={4}
              border='1px solid'
              borderColor='zinc.300'
              p={2}
              borderRadius={8}
              flexWrap='wrap'
              justify='center'
            >
              {formik.values?.skills?.map((skill) => (
                <SkillItem
                  key={skill.key}
                  data={skill}
                  deleteSkill={deleteSkill}
                />
              ))}
            </Flex>
          )}
          <SimpleButton
            rightIcon={<CirclePlus />}
            onClick={() => addNewSkillOpen()}
            size='xs'
            iconSpacing={1}
            isDisabled={formik.values?.skills?.length === 10}
          >
            Agregar nueva habilidad
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
        <SkillsFormComponent
          isOpen={isOpen}
          onClose={onToggle}
          data={currentSkillSelected}
          addNewSkill={addNewSkill}
          updateDataSkill={updateDataSkill}
        />
      )}
    </Flex>
  )
}

export default SkillsForm
