import { Box, Flex } from '@chakra-ui/react'
import FormContainer from '@/modules/builder/components/FormContainer'
import Preview from '@/modules/builder/components/Preview'
import { GET_IS_SMALL_SCREAM } from '@/shared/constants'

const Builder = () => {
  const isSmallScream = GET_IS_SMALL_SCREAM()
  return (
    <Flex
      gap={2}
      w='full'
      direction={isSmallScream ? 'column' : 'row'}
    >
      <Box
        w='full'
        flex={4}
      >
        <FormContainer />
      </Box>
      <Box
        w='full'
        flex={6}
      >
        <Preview />
      </Box>
    </Flex>
  )
}

export default Builder
