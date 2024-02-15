import { Flex, Text } from '@chakra-ui/react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { SimpleButton, SimpleIconButton } from '@/shared/components/buttons'
import { TEMPLATE_DICT } from '../Templates/getTemplate'
import { OnlyAutocomplete } from '@/shared/components/inputs'
import templatesOptions from '@/shared/data/templatesOptions.json'
import { GET_IS_SMALL_SCREAM } from '@/shared/constants'
import { Download } from '@/shared/icons'

const Options = () => {
  const isSmallScream = GET_IS_SMALL_SCREAM()
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
        w={{ lg: '20%' }}
      >
        Previsualización
      </Text>
      <Flex
        justify='flex-end'
        w='full'
      >
        <Flex
          gap={2}
          w={{ lg: '50%' }}
          justify='flex-end'
          align='center'
        >
          <Flex>
            <OnlyAutocomplete
              label='plantilla'
              value={templatesOptions[0].value}
              onChange={(item) => console.log(item)}
              list={templatesOptions}
              size={25}
              isSearchable={false}
            />
          </Flex>
          {!isSmallScream ? (
            <PDFDownloadLink
              document={TEMPLATE_DICT['BASIC']}
              fileName='cv'
            >
              {({ loading }) => (
                <SimpleButton
                  size='xs'
                  isDisabled={loading}
                  isLoading={loading}
                  rightIcon={<Download />}
                  iconSpacing={1}
                >
                  Descargar cv
                </SimpleButton>
              )}
            </PDFDownloadLink>
          ) : (
            <PDFDownloadLink
              document={TEMPLATE_DICT['BASIC']}
              fileName='cv'
            >
              {({ loading }) => (
                <SimpleIconButton
                  icon={<Download />}
                  aria-label='download'
                  size='xs'
                  isLoading={loading}
                />
              )}
            </PDFDownloadLink>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Options
