import { Institution } from '@/modules/builder/types'
import { SimpleIconButton } from '@/shared/components/buttons'
import { GET_IS_SMALL_SCREAM, GRADIENTS_BG } from '@/shared/constants'
import { Calendar, EditCircle, Trash } from '@/shared/icons'
import { formatRangeDateString } from '@/shared/utils/format'
import { Flex, Icon, Text } from '@chakra-ui/react'

interface Props {
  data: Institution
  updateInstitution: (institution: Institution) => void
  deleteInstitution: (institution: Institution) => void
}

const InstitutionItem = ({
  data,
  updateInstitution,
  deleteInstitution,
}: Props) => {
  const isSmallScream = GET_IS_SMALL_SCREAM()
  return (
    <Flex
      direction='column'
      gap={2}
      border='1px dotted'
      borderColor='zinc.500'
      borderRadius={4}
      p={2}
    >
      <Flex
        gap={2}
        w='full'
        bg={GRADIENTS_BG.DARK}
        borderRadius={4}
        px={2}
        fontSize={20}
        fontWeight='bold'
        justify='space-between'
        align='center'
      >
        <Text noOfLines={[1]}>{data?.educationName}</Text>
        <Flex
          gap={2}
          align='center'
        >
          <SimpleIconButton
            icon={<EditCircle />}
            aria-label='edit'
            bg='zinc.500'
            color='zinc.50'
            _hover={{ bg: 'zinc.800' }}
            size='xs'
            onClick={() => updateInstitution(data)}
          />
          <SimpleIconButton
            icon={<Trash />}
            aria-label='delete'
            bg='zinc.500'
            color='zinc.50'
            _hover={{ bg: 'zinc.800' }}
            size='xs'
            onClick={() => deleteInstitution(data)}
          />
        </Flex>
      </Flex>
      {/* ---- */}
      <Flex
        gap={2}
        justify='center'
        align='center'
        bg='zinc.900'
        borderRadius={4}
        px={2}
        direction={!isSmallScream ? 'row' : 'column'}
      >
        <Flex gap={2}>
          <Icon fontSize={20}>
            <Calendar />
          </Icon>
          <Text fontWeight='bold'>Periodo:</Text>
        </Flex>
        <Text>{formatRangeDateString(data.startDate, data.endDate)}</Text>
      </Flex>
      {/* ---- */}
      <Flex
        gap={2}
        w='full'
        bg='zinc.900'
        borderRadius={4}
        p={4}
        fontSize={16}
        direction='column'
      >
        {data?.description && (
          <Text noOfLines={[1, 2]}>{data?.description}</Text>
        )}
      </Flex>
    </Flex>
  )
}

export default InstitutionItem
