import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Switch,
  SwitchProps,
} from '@chakra-ui/react'

interface SwitchInputProps extends SwitchProps {
  label: string
  errorMsg?: string
}

const SwitchInput = ({ label, errorMsg, ...props }: SwitchInputProps) => {
  const idInput = (Math.random() + 1).toString(36).substring(7)

  return (
    <FormControl
      display='flex'
      isInvalid={Boolean(errorMsg)}
      pb={errorMsg ? 0 : 6}
    >
      <FormLabel
        htmlFor={idInput}
        fontWeight={500}
      >
        {label}
      </FormLabel>
      <Switch
        pt={0.5}
        id={idInput}
        colorScheme='mediumPurple'
        {...props}
      />

      <FormErrorMessage>{errorMsg || ''}</FormErrorMessage>
    </FormControl>
  )
}

export default SwitchInput
