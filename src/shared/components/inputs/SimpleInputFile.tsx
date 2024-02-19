import { useId } from 'react'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
} from '@chakra-ui/react'
import { DropZoneInput } from '.'
import { Accept } from './DropZoneInput'

interface Props {
  label: string
  errorMsg?: string
  value?: string[]
  onChange: (filesUrl: string[]) => void
  limit: number
  accept: Accept[]
  useCropImg: boolean
  multiple: boolean
}

const SimpleInputFile = ({
  label,
  errorMsg,
  value,
  onChange,
  limit,
  accept,
  useCropImg,
  multiple,
}: Props) => {
  const idInput = useId()

  return (
    <FormControl
      isInvalid={Boolean(errorMsg)}
      pb={errorMsg ? 0 : 6}
    >
      <FormLabel
        htmlFor={idInput}
        fontWeight={500}
        my={0}
      >
        {label}
      </FormLabel>
      <InputGroup
        size='md'
        display='flex'
        flexDirection='column'
      >
        <DropZoneInput
          limit={limit}
          accept={accept}
          useCropImg={useCropImg}
          multiple={multiple}
          onChange={(v) => onChange(v)}
          value={value}
        />
      </InputGroup>
      <FormErrorMessage>{errorMsg || ''}</FormErrorMessage>
    </FormControl>
  )
}

export default SimpleInputFile
