import {
  IconButton,
  useColorModeValue,
  type IconButtonProps,
} from '@chakra-ui/react'

interface SimpleIconButtonProps extends IconButtonProps {}

const SimpleIconButton = ({ ...props }: SimpleIconButtonProps) => {
  const colorScheme = useColorModeValue('light.primaryFull', 'dark.primaryFull')
  return (
    <IconButton
      colorScheme={colorScheme}
      {...props}
    />
  )
}

export default SimpleIconButton
