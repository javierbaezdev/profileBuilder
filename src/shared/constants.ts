import { useColorMode } from '@chakra-ui/react'
import { useMediaQuery } from 'react-responsive'

export const FAKE_DELAY_ROUTER = 600

export const KEYS_DND = {
  COLUMN: 'COLUMN',
  TASK: 'TASK',
}

export const NO_DATA = {
  general: 'Sin datos Proporcionados',
  description: 'Sin descripción 🤐',
  columnName: 'Sin nombre',
}

export const SCHEMA_MESSAGES = {
  required: 'El campo es requerido',
  minNum: 'El valor debe ser mayor o igual a: ',
  maxNum: 'El valor debe ser menor o igual a: ',
  maxCha: 'La cantidad máxima de caracteres permitida es de: ',
  isNumber: 'El valor ingresado debe ser un número',
  email: 'Ingrese una dirección de correo electrónico válida',
  atLeastOne: 'Se requiere al menos un elemento en la lista',
}

export const WORK_TYPE_DICT: Record<string, any> = {
  REMOTE: { colorSchema: 'purple', es: 'Remoto' },
  IN_PERSON: { colorSchema: 'orange', es: 'Presencial' },
  FREELANCE: { colorSchema: 'green', es: 'Independiente' },
  MIXED: { colorSchema: 'cian', es: 'Combinado' },
}

export const GRADIENTS_BG = {
  DARK: 'linear-gradient(277deg, rgba(255,255,255,0) 0%, rgba(24,24,27,1) 100%)',
  LIGHT:
    'linear-gradient(277deg, rgba(255,255,255,0) 0%, rgba(163,163,163,1) 100%)',
}

export const GET_COLORS_THEME = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return { colorMode, toggleColorMode }
}

export const GET_IS_SMALL_SCREAM = () => {
  return useMediaQuery({
    query: '(max-width: 600px)',
  })
}

export const GET_STYLES_SCROLL = () => {
  const isSmallScream = GET_IS_SMALL_SCREAM()

  return {
    '&::-webkit-scrollbar': {
      display: isSmallScream ? 'none' : 'block',
    },
    msOverflowStyle: isSmallScream ? 'none' : 'block',
    scrollbarWidth: isSmallScream ? 'none' : 'block',
  }
}
