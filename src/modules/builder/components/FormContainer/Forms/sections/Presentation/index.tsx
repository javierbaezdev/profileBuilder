import { useEffect } from 'react'
import { Flex } from '@chakra-ui/react'
import { useFormik } from 'formik'
import {
  PresentationFrom,
  initialValuesPresentation,
} from '@/modules/builder/components/FormContainer/validation/initialValues'
import { presentationSchema } from '@/modules/builder/components/FormContainer/validation/schema'
import {
  SimpleInput,
  SimpleInputFile,
  SimpleTextArea,
} from '@/shared/components/inputs'
import { SimpleButton } from '@/shared/components/buttons'
import { DeviceFloppy } from '@/shared/icons'
import { useBuilderStore } from '@/modules/builder/store'
import placeHolders from '@/modules/builder/components/FormContainer/Forms/placeHolders.json'

const PresentationForm = () => {
  const { presentationData, setPresentationData } = useBuilderStore(
    (store) => store
  )
  const formik = useFormik<PresentationFrom>({
    initialValues: initialValuesPresentation,
    validationSchema: presentationSchema,
    onSubmit: async (values) => {
      setPresentationData(values)
    },
  })

  useEffect(() => {
    if (presentationData && presentationData.isUpdate) {
      formik.setValues(presentationData)
    }
  }, [presentationData])

  return (
    <Flex
      direction='column'
      gap={2}
      w='full'
    >
      <SimpleInput
        name='fullName'
        label='Nombre Completo'
        value={formik.values.fullName}
        errorMsg={formik.errors?.fullName}
        onChange={formik.handleChange}
        placeholder={placeHolders.FULL_NAME}
      />
      <SimpleTextArea
        name='description'
        label='Descripción'
        value={formik.values?.description}
        errorMsg={formik.errors?.description}
        onChange={formik.handleChange}
        placeholder={placeHolders.DESCRIPTION}
      />
      <SimpleInput
        name='location'
        label='Ubicación'
        value={formik.values.location}
        errorMsg={formik.errors?.location}
        onChange={formik.handleChange}
        placeholder={placeHolders.LOCATION}
      />
      <SimpleInputFile
        label='Foto'
        value={formik.values?.imgUrl ? [formik.values.imgUrl] : []}
        onChange={(urls) =>
          formik.setFieldValue('imgUrl', urls?.length > 0 ? urls[0] : '')
        }
        limit={1}
        accept={['image']}
        useCropImg={!Boolean(formik.values?.imgUrl)}
        multiple={false}
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

export default PresentationForm
