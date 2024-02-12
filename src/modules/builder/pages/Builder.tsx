import { Grid, GridItem } from '@chakra-ui/react'
import Form from '@/modules/builder/components/Form'
import Preview from '@/modules/builder/components/Preview'

const Builder = () => {
  return (
    <Grid
      templateColumns={{
        lg: 'repeat(3, 1fr)',
      }}
      w='full'
      gap={2}
    >
      <GridItem colSpan={1}>
        <Form />
      </GridItem>
      <GridItem colSpan={2}>
        <Preview />
      </GridItem>
    </Grid>
  )
}

export default Builder
