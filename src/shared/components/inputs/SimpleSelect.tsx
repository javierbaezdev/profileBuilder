import { COMBINED_COLORS } from '@/theme/combinedColors'
import {
  FormControl,
  FormLabel,
  Select,
  type SelectProps,
} from '@chakra-ui/react'

interface itemList {
  value: string | number
  label: string | number
}

interface SimpleSelectProps extends SelectProps {
  list: itemList[]
  label: string
  errorMsg?: string
}
const SimpleSelect = ({
  list = [],
  label,
  errorMsg,
  ...props
}: SimpleSelectProps) => {
  const idInput = (Math.random() + 1).toString(36).substring(7)
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
      <Select
        focusBorderColor='violet.400'
        _placeholder={{ opacity: 1, color: 'violet.400' }}
        {...props}
      >
        {list?.map(({ value, label }) => (
          <option
            key={`${value}-key`}
            value={value}
            style={{ background: COMBINED_COLORS.zinc[100] }}
          >
            {label}
          </option>
        ))}
      </Select>
    </FormControl>
  )
}

export default SimpleSelect
