import { COMBINED_COLORS } from '@/theme/combinedColors'
import { Select, type SelectProps } from '@chakra-ui/react'

interface itemList {
  value: string | number
  label: string | number
}

interface Props extends SelectProps {
  list: itemList[]
}
const OnlySelect = ({ list = [], ...props }: Props) => {
  return (
    <Select
      focusBorderColor='zinc.400'
      _placeholder={{ opacity: 1, color: 'zinc.400' }}
      borderRadius={6}
      {...props}
    >
      {list?.map(({ value, label }) => (
        <option
          key={`${value}-key`}
          value={value}
          style={{
            background: COMBINED_COLORS.zinc[200],
          }}
        >
          {label}
        </option>
      ))}
    </Select>
  )
}

export default OnlySelect
