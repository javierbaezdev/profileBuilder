import 'react-datepicker/dist/react-datepicker.css'
import DatePicker, { registerLocale } from 'react-datepicker'
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Select,
} from '@chakra-ui/react'
import { getMonth, getYear } from 'date-fns'
import { es } from 'date-fns/locale'
import MONTHS from '@/shared/data/months.json'
import { getYearsFromStartYear } from '@/shared/utils/getYearsFromStartYear'
import { COMBINED_COLORS } from '@/theme/combinedColors'
import { Calendar } from '@/shared/icons'

interface CustomDatePickerProps {
  dateValue?: Date
  disabled?: boolean
  label: string
  errorMsg?: string
  onChange?: (date: Date | null) => void
  minDate?: Date
  maxDate?: Date
  starYearSelect?: number
}

const CustomDatePicker = ({
  dateValue,
  disabled,
  label,
  errorMsg,
  onChange,
  minDate,
  maxDate,
  starYearSelect,
}: CustomDatePickerProps) => {
  registerLocale('es', es)
  const years = getYearsFromStartYear(starYearSelect)
  const idInput = (Math.random() + 1).toString(36).substring(7)
  return (
    <FormControl
      isInvalid={Boolean(errorMsg)}
      pb={errorMsg ? 0 : 6}
      w='100%'
    >
      <FormLabel
        htmlFor={idInput}
        fontWeight={500}
      >
        {label}
      </FormLabel>
      <DatePicker
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <Flex
            p={1}
            justify='center'
            gap={2}
          >
            <Button
              p={0}
              bg={'transparent'}
              _hover={{ bg: COMBINED_COLORS.zinc[700] }}
              color='white'
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
              size='xs'
            >
              {'◀'}
            </Button>
            <Select
              value={getYear(date)}
              onChange={({ target: { value } }) =>
                changeYear(parseInt(value, 10))
              }
              focusBorderColor='zinc.500'
              size='xs'
              borderRadius={5}
            >
              {years.map((option) => (
                <option
                  key={option}
                  value={option}
                  style={{
                    background: COMBINED_COLORS.zinc[200],
                    color: COMBINED_COLORS.zinc[500],
                  }}
                >
                  {option}
                </option>
              ))}
            </Select>

            <Select
              value={MONTHS[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(MONTHS.indexOf(value))
              }
              focusBorderColor='zinc.500'
              size='xs'
              borderRadius={5}
            >
              {MONTHS.map((option) => (
                <option
                  key={option}
                  value={option}
                  style={{
                    background: COMBINED_COLORS.zinc[200],
                    color: COMBINED_COLORS.zinc[500],
                  }}
                >
                  {option}
                </option>
              ))}
            </Select>

            <Button
              p={0}
              bg={'transparent'}
              _hover={{ bg: COMBINED_COLORS.zinc[700] }}
              color='white'
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
              size='xs'
            >
              {'▶'}
            </Button>
          </Flex>
        )}
        selected={dateValue}
        onChange={(date: Date) => {
          onChange && onChange(date)
        }}
        locale='es'
        customInput={
          <InputGroup>
            <Input
              value={dateValue ? dateValue?.toLocaleDateString() : ''}
              readOnly={true}
              focusBorderColor='violet.400'
              disabled={disabled}
              placeholder={'DD/MM/AAAA'}
              borderColor='violet.200'
              _hover={{ cursor: 'pointer' }}
            />
            <InputRightElement
              opacity={disabled ? 0.3 : 1}
              color='violet.500'
            >
              <Icon>
                <Calendar />
              </Icon>
            </InputRightElement>
          </InputGroup>
        }
        dateFormat={"dd 'de' MMMM 'de' yyyy"}
        disabled={disabled}
        minDate={minDate}
        maxDate={maxDate}
      />
      <FormErrorMessage>{errorMsg || ''}</FormErrorMessage>
    </FormControl>
  )
}

export default CustomDatePicker
