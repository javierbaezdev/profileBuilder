import { Flex } from '@chakra-ui/react'
import { PDFViewer, StyleSheet } from '@react-pdf/renderer'
import { Basic } from '@/modules/builder/components/Templates'

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
    >
      <PDFViewer
        width='100%'
        style={styles.viewer}
        showToolbar={false}
      >
        <Basic />
      </PDFViewer>
    </Flex>
  )
}

export default Preview
