import { Flex } from '@chakra-ui/react'
import { PDFViewer, StyleSheet } from '@react-pdf/renderer'
import Options from './Options'
import { TEMPLATE_DICT } from '../Templates/getTemplate'

const styles = StyleSheet.create({
  viewer: {
    borderRadius: '0.5rem',
  },
})

const Preview = () => {
  return (
    <Flex
      w='full'
      h='full'
      gap={2}
      direction='column'
    >
      <Options />
      <PDFViewer
        width='100%'
        height='100%'
        style={styles.viewer}
        showToolbar={false}
      >
        {TEMPLATE_DICT['BASIC']}
      </PDFViewer>
    </Flex>
  )
}

export default Preview
