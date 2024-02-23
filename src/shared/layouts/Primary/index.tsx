import { Box, Flex, Image } from '@chakra-ui/react'
import LOGO from '@/assets/logo/full.svg'
import Navigation from './Navigation'
import {
  GET_IS_SMALL_SCREAM,
  GET_STYLES_SCROLL,
  GRADIENTS_BG,
} from '@/shared/constants'

interface Props {
  children: JSX.Element
}

export const MIN_H_HEADER = 55

const Primary = ({ children }: Props) => {
  const isSmallScream = GET_IS_SMALL_SCREAM()
  return (
    <Flex
      h='full'
      w='full'
    >
      <Flex
        bg={GRADIENTS_BG.DARK}
        as='header'
        align='center'
        justify='space-between'
        px='1rem'
        py='1rem'
        position='fixed'
        top='0'
        w='100%'
        borderRadius='0rem 0rem 1rem 1rem'
        h={MIN_H_HEADER}
      >
        <Box w={!isSmallScream ? 200 : 130}>
          <Image
            objectFit='cover'
            src={LOGO}
            alt='logo'
          />
        </Box>
        <Navigation />
      </Flex>
      <Flex
        mt={MIN_H_HEADER}
        p={4}
        w='100%'
        sx={GET_STYLES_SCROLL()}
        overflow='auto'
      >
        {children}
      </Flex>
    </Flex>
  )
}

export default Primary
