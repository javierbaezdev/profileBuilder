import { Flex, Text } from '@chakra-ui/react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { SimpleButton } from '@/shared/components/buttons'
import { TEMPLATE_DICT } from '../Templates/getTemplate'
import { OnlySelect } from '@/shared/components/inputs'
import templatesOptions from '@/shared/data/templatesOptions.json'

const Options = () => {
  return (
    <Flex
      bg='zinc.900'
      borderRadius={8}
      p={2}
      justify='space-between'
      gap={2}
    >
      <Text
        fontSize='md'
        fontWeight='bold'
        w='20%'
      >
        Previsualización
      </Text>
      <Flex
        justify='flex-end'
        w='full'
      >
        <Flex
          gap={2}
          w='50%'
        >
          <OnlySelect
            value={templatesOptions[0].value}
            list={templatesOptions}
            onChange={(event) => {
              typeof (event?.target as HTMLSelectElement)?.value === 'string' &&
                console.log((event?.target as HTMLSelectElement)?.value)
            }}
            size='xs'
          />
          <PDFDownloadLink
            document={TEMPLATE_DICT['BASIC']}
            fileName='cv'
          >
            {({ loading }) => (
              <SimpleButton
                size='xs'
                isDisabled={loading}
              >
                {loading ? 'Cargando...' : 'Descargar cv'}
              </SimpleButton>
            )}
          </PDFDownloadLink>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Options
