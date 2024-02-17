import { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { PDFViewer, StyleSheet } from '@react-pdf/renderer'
import Options from './Options'
import { TEMPLATE_DICT } from '../Templates/getTemplate'
import { Min01 } from '@/shared/components/loaders'
import { useBuilderStore } from '../../store'

const styles = StyleSheet.create({
  viewer: {
    borderRadius: '0.5rem',
  },
})

const FAKE_TIME_LOADING = 2000

const Preview = () => {
  const [fakeLoading, setFakeLoading] = useState(true)
  const { presentationData, templateSelected } = useBuilderStore(
    (store) => store
  )

  useEffect(() => {
    if (!fakeLoading) {
      setFakeLoading(true)
    }

    setTimeout(() => {
      setFakeLoading(false)
    }, FAKE_TIME_LOADING)
  }, [presentationData])

  return (
    <Flex
      w='full'
      h='full'
      gap={2}
      direction='column'
    >
      <Options />
      <Flex
        bg='zinc.600'
        h='full'
        borderRadius={8}
        position='relative'
      >
        <PDFViewer
          width='100%'
          height='100%'
          style={{
            ...styles.viewer,
            opacity: !fakeLoading ? 1 : 0,
          }}
          showToolbar={false}
        >
          {TEMPLATE_DICT[templateSelected](presentationData)}
        </PDFViewer>
        {fakeLoading && (
          <Flex
            position='absolute'
            top={0}
            left={0}
            w='full'
            h='full'
            justify='center'
            align='center'
          >
            <Min01 />
          </Flex>
        )}
      </Flex>
    </Flex>
  )
}

export default Preview
