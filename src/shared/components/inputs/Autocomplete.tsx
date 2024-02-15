import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react'
import { OnlyAutocomplete } from '.'
import { PropsOnlyAutocomplete } from './OnlyAutocomplete'

const Autocomplete = ({
  label,
  value,
  onChange,
  errorMsg,
  isLoading,
  isDisabled,
  list = [],
  size,
  isSearchable,
}: PropsOnlyAutocomplete) => {
  const SIZE = size ? size : undefined
  return (
    <Flex
      justify='center'
      align='center'
      w='full'
    >
      <FormControl
        isInvalid={Boolean(errorMsg)}
        pb={errorMsg ? 0 : 6}
      >
        <FormLabel fontWeight={500}>{label}</FormLabel>
        <OnlyAutocomplete
          label={label}
          onChange={(item) => onChange(item)}
          size={SIZE}
          list={list}
          isDisabled={isDisabled}
          isLoading={isLoading}
          value={value}
          isSearchable={isSearchable}
        />
        <FormErrorMessage>{errorMsg || ''}</FormErrorMessage>
      </FormControl>
    </Flex>
  )
}

export default Autocomplete
