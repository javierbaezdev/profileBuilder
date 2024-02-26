import { useEffect } from 'react'
import { Flex } from '@chakra-ui/react'
import { useFormik } from 'formik'
import {
  AboutFrom,
  initialValuesAbout,
} from '@/modules/builder/components/FormContainer/validation/initialValues'
import { aboutSchema } from '@/modules/builder/components/FormContainer/validation/schema'
import { SimpleTextArea } from '@/shared/components/inputs'
import { SimpleButton } from '@/shared/components/buttons'
import { DeviceFloppy } from '@/shared/icons'
import { useBuilderStore } from '@/modules/builder/store'
import placeHolders from '@/modules/builder/components/FormContainer/Forms/placeHolders.json'

const AboutForm = () => {
  const { aboutData, setAboutData } = useBuilderStore((store) => store)
  const formik = useFormik<AboutFrom>({
    initialValues: initialValuesAbout,
    validationSchema: aboutSchema,
    onSubmit: async (values) => {
      setAboutData(values)
    },
  })

  useEffect(() => {
    formik.setValues(aboutData)
  }, [aboutData])

  return (
    <Flex
      direction='column'
      gap={2}
      w='full'
    >
      <SimpleTextArea
        name='description'
        label='Descripción'
        value={formik.values?.description}
        errorMsg={formik.errors?.description}
        onChange={formik.handleChange}
        placeholder={placeHolders.DESCRIPTION_FULL}
      />
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
    </Flex>
  )
}

export default AboutForm
