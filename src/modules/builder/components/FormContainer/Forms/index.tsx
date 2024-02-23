import { Flex } from '@chakra-ui/react'
import AccordionContainer from '../../AccordionContainer'
import {
  About,
  Contact,
  Education,
  Experience,
  Presentation,
  Skills,
} from './sections'

const Forms = () => {
  return (
    <Flex
      w='full'
      h='full'
      bg='zinc.900'
      borderRadius={8}
      p={2}
      direction='column'
      gap={2}
      overflow='auto'
    >
      <AccordionContainer title={'Presentación'}>
        <Presentation />
      </AccordionContainer>
      <AccordionContainer title={'Acerca de mi'}>
        <About />
      </AccordionContainer>
      <AccordionContainer title={'Experiencia'}>
        <Experience />
      </AccordionContainer>
      <AccordionContainer title={'Educación'}>
        <Education />
      </AccordionContainer>
      <AccordionContainer title={'Habilidades'}>
        <Skills />
      </AccordionContainer>
      <AccordionContainer title={'Información de contacto'}>
        <Contact />
      </AccordionContainer>
    </Flex>
  )
}

export default Forms
