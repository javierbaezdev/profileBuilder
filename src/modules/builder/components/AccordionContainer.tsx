import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react'

interface Props {
  title: string | JSX.Element
  children: JSX.Element
}

const AccordionContainer = ({ title, children }: Props) => {
  return (
    <Accordion
      allowToggle
      w='full'
    >
      <AccordionItem
        bg='zinc.800'
        borderRadius={8}
        border='1px solid'
        borderColor='zinc.600'
      >
        <h2>
          <AccordionButton>
            <Box
              as='span'
              flex='1'
              textAlign='left'
            >
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{children}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionContainer
