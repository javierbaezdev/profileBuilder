import { Button, type ButtonProps } from '@chakra-ui/react'

interface Props extends ButtonProps {}

const SimpleButton = ({ ...props }: Props) => {
  return (
    <Button
      colorScheme='zinc'
      {...props}
    />
  )
}

export default SimpleButton
