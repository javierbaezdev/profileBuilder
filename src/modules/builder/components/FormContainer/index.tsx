import { Flex, Text } from '@chakra-ui/react'
import Forms from './Forms'

const FormContainer = () => {
  return (
    <Flex
      w='full'
      h='full'
      gap={2}
      borderRadius={8}
      overflow='auto'
      flexDirection='column'
    >
      <Flex
        w='full'
        bg='zinc.900'
        borderRadius={8}
        p={2}
        justify='space-between'
        gap={2}
      >
        <Text
          fontSize='md'
          fontWeight='bold'
        >
          Información para el cv
        </Text>
      </Flex>
      <Forms />
    </Flex>
  )
}

export default FormContainer
