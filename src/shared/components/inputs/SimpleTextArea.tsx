import { useId } from 'react'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  Textarea,
  TextareaProps,
  useColorModeValue,
} from '@chakra-ui/react'

interface Props extends TextareaProps {
  label: string
  errorMsg?: string
  leftElement?: JSX.Element
  rightElement?: JSX.Element
}

const SimpleTextArea = ({
  label,
  errorMsg,
  leftElement,
  rightElement,
  ...props
}: Props) => {
  const idInput = useId()
  const focusBorderColor = useColorModeValue('zinc.200', 'zinc.600')
  const borderColor = useColorModeValue('zinc.100', 'zinc.100')

  return (
    <FormControl
      isInvalid={Boolean(errorMsg)}
      pb={errorMsg ? 0 : 6}
    >
      <FormLabel
        htmlFor={idInput}
        fontWeight={500}
      >
        {label}
      </FormLabel>
      <InputGroup size='md'>
        <Textarea
          id={idInput}
          focusBorderColor={focusBorderColor}
          borderColor={borderColor}
          resize='vertical'
          {...props}
        />
      </InputGroup>
      <FormErrorMessage>{errorMsg || ''}</FormErrorMessage>
    </FormControl>
  )
}

export default SimpleTextArea
