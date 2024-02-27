import { ContactItem } from '@/modules/builder/types'
import { SimpleIconButton } from '@/shared/components/buttons'
import { GET_IS_SMALL_SCREAM } from '@/shared/constants'
import { EditCircle, Trash } from '@/shared/icons'
import { Flex, Text } from '@chakra-ui/react'

interface Props {
  data: ContactItem
  updateContact: (contact: ContactItem) => void
  deleteContact: (contact: ContactItem) => void
}

const ContactItemComponent = ({
  data,
  updateContact,
  deleteContact,
}: Props) => {
  const isSmallScream = GET_IS_SMALL_SCREAM()
  return (
    <>
      <Flex
        justify={!isSmallScream ? 'space-between' : 'center'}
        direction={isSmallScream ? 'column' : 'row'}
        gap={2}
        w='full'
      >
        <Text as='b'>{data.label}:</Text>

        <Flex
          gap={2}
          align='center'
        >
          <Text>{data.value}</Text>
          <Flex
            gap={2}
            ml={isSmallScream ? 'auto' : undefined}
          >
            <SimpleIconButton
              icon={<EditCircle />}
              aria-label='edit'
              bg='zinc.500'
              color='zinc.50'
              _hover={{ bg: 'zinc.800' }}
              size='xs'
              onClick={() => updateContact(data)}
            />
            <SimpleIconButton
              icon={<Trash />}
              aria-label='delete'
              bg='zinc.500'
              color='zinc.50'
              _hover={{ bg: 'zinc.800' }}
              size='xs'
              onClick={() => deleteContact(data)}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default ContactItemComponent
