import { Flex } from '@chakra-ui/react'
import './loader.css'

const FullScreen = () => {
  return (
    <Flex
      w='full'
      h='full'
      direction='column'
      justify='center'
      align='center'
    >
      <span className='loader' />
    </Flex>
  )
}

export default FullScreen
