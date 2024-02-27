import { Flex, Text } from '@chakra-ui/react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { SimpleButton, SimpleIconButton } from '@/shared/components/buttons'
import { TEMPLATE_DICT } from '@/modules/builder/Templates/getTemplate'
import { OnlyAutocomplete } from '@/shared/components/inputs'
import templatesOptions from '@/shared/data/templatesOptions.json'
import languages from '@/shared/data/languages.json'
import { GET_IS_SMALL_SCREAM } from '@/shared/constants'
import { Download } from '@/shared/icons'
import { useBuilderStore } from '../../store'
import { Language } from '../../types'

const Options = () => {
  const {
    language,
    presentationData,
    aboutData,
    experienceData,
    educationData,
    skillsData,
    contactsData,
    templateSelected,
    onChangeLanguage,
  } = useBuilderStore((store) => store)
  const isSmallScream = GET_IS_SMALL_SCREAM()
  return (
    <Flex
      bg='zinc.900'
      borderRadius={8}
      p={2}
      justify='space-between'
      gap={2}
    >
      {!isSmallScream && (
        <Text
          fontSize='md'
          fontWeight='bold'
          w={{ lg: '20%' }}
        >
          Previsualización
        </Text>
      )}

      <Flex
        gap={2}
        w='full'
        justify={!isSmallScream ? 'flex-end' : 'center'}
        align='center'
      >
        <Flex>
          <OnlyAutocomplete
            label='idioma'
            value={language}
            onChange={(item) => {
              if (item) {
                const valueToPass = item.value as Language
                onChangeLanguage(valueToPass)
              }
            }}
            list={languages}
            size={25}
            isSearchable={false}
          />
        </Flex>
        <Flex>
          <OnlyAutocomplete
            label='plantilla'
            value={templatesOptions[0].value}
            onChange={(item) => console.log(item)}
            list={templatesOptions}
            size={25}
            isSearchable={false}
            isDisabled={true}
          />
        </Flex>
        <Flex ml={isSmallScream ? 'auto' : undefined}>
          {!isSmallScream ? (
            <PDFDownloadLink
              document={TEMPLATE_DICT[templateSelected](
                language,
                presentationData,
                aboutData,
                experienceData,
                educationData,
                skillsData,
                contactsData
              )}
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
              document={TEMPLATE_DICT['BASIC'](
                language,
                presentationData,
                aboutData,
                experienceData,
                educationData,
                skillsData,
                contactsData
              )}
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
