import { COMBINED_COLORS } from '@/theme/combinedColors'
import Select from 'react-select'

export interface Item {
  value: string | number
  label: string
}

export interface PropsOnlyAutocomplete {
  label: string
  value?: string
  list?: Item[]
  onChange: (value?: Item) => void
  errorMsg?: string
  isLoading?: boolean
  isDisabled?: boolean
  size?: number
  isSearchable?: boolean
}

const OnlyAutocomplete = ({
  label,
  value,
  onChange,
  isLoading,
  isDisabled,
  list = [],
  size,
  isSearchable,
}: PropsOnlyAutocomplete) => {
  const SIZE = size ? size : undefined
  return (
    <Select
      className='basic-single'
      placeholder={
        isLoading
          ? `Cargando ${label.toLowerCase()}...`
          : `Seleccionar/Buscar ${label.toLowerCase()}`
      }
      value={value ? list?.find((item) => item.value === value) : undefined}
      name={label}
      options={list}
      onChange={(item) => (item ? onChange(item) : undefined)}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          background: 'Transparent',
          '&:hover': { borderColor: COMBINED_COLORS.zinc[700] },
          border: `1px solid ${COMBINED_COLORS.zinc[600]}`,
          boxShadow: 'none',
          borderRadius: '0.375rem',
          fontSize: '0.7rem',
          height: SIZE,
          minHeight: SIZE,
        }),
        singleValue: (base) => ({
          ...base,
          color: COMBINED_COLORS.zinc[100],
          maxHeight: SIZE,
        }),
        input: (base) => ({
          ...base,
          color: COMBINED_COLORS.zinc[100],
          maxHeight: SIZE,
        }),
        valueContainer: (provided) => ({
          ...provided,
          maxHeight: SIZE,
        }),
        indicatorsContainer: (provided) => ({
          ...provided,
          height: SIZE,
        }),
        dropdownIndicator: (base) => ({
          ...base,
          color: COMBINED_COLORS.zinc[100],
          minHeight: SIZE,
        }),
        menuList: (base) => ({
          ...base,
          padding: 0,
        }),
        noOptionsMessage: (base) => ({
          ...base,
          background: COMBINED_COLORS.zinc[700],
          color: COMBINED_COLORS.zinc[100],
        }),
        option: (provided, state) => ({
          ...provided,
          margin: 0,
          backgroundColor: state.isFocused
            ? COMBINED_COLORS.zinc[700]
            : undefined,
          '&:hover': {
            backgroundColor: COMBINED_COLORS.zinc[600],
            cursor: 'pointer',
          },
        }),
      }}
      isDisabled={isDisabled}
      isLoading={isLoading}
      noOptionsMessage={() => 'Sin Elementos encontrados'}
      isClearable={false}
      isRtl={false}
      isSearchable={isSearchable}
    />
  )
}

export default OnlyAutocomplete
