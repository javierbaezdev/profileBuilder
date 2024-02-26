import { SkillsItem } from '@/modules/builder/types'
import { SimpleModal } from '@/shared/components/modals'
import { useFormik } from 'formik'
import { initialValuesSkill } from '@/modules/builder/components/FormContainer/validation/initialValues'
import { skillSchema } from '@/modules/builder/components/FormContainer/validation/schema'
import { generateId } from '@/shared/utils/generate'
import { SimpleInput } from '@/shared/components/inputs'
import { Flex } from '@chakra-ui/react'
import { useEffect } from 'react'
import { SimpleButton } from '@/shared/components/buttons'
import { DeviceFloppy } from '@/shared/icons'
import trimObjectValues from '@/shared/utils/trimObjectValues'
import placeHolders from '@/modules/builder/components/FormContainer/Forms/placeHolders.json'

interface Props {
  data?: SkillsItem
  isOpen: boolean
  onClose: () => void
  addNewSkill: (skill: SkillsItem) => void
  updateDataSkill: (skill: SkillsItem) => void
}

const SkillsForm = ({
  data,
  onClose,
  isOpen,
  addNewSkill,
  updateDataSkill,
}: Props) => {
  const initialValues = { ...initialValuesSkill, key: generateId() }
  const formik = useFormik<SkillsItem>({
    initialValues,
    validationSchema: skillSchema,
    onSubmit: async (values) => {
      const formatValues = trimObjectValues(values)
      if (!data) {
        addNewSkill(formatValues)
      }
      if (data) {
        updateDataSkill(formatValues)
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
      modalHeader={!data ? 'Agregar habilidad' : 'Actualizar habilidad'}
    >
      <Flex
        direction='column'
        gap={2}
      >
        <SimpleInput
          name='value'
          label='Habilidad'
          value={formik.values.value}
          errorMsg={formik.errors?.value}
          onChange={formik.handleChange}
          placeholder={placeHolders.SKILL}
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

export default SkillsForm
