import { Grid, GridItem } from '@chakra-ui/react'
import FormContainer from '@/modules/builder/components/FormContainer'
import Preview from '@/modules/builder/components/Preview'

const Builder = () => {
  return (
    <Grid
      templateColumns={{
        lg: 'repeat(5, 1fr)',
        md: 'repeat(1, 1fr)',
      }}
      w='full'
      gap={2}
    >
      <GridItem
        colSpan={{
          lg: 2,
        }}
        /* order={{ base: 2, lg: 1 }} */
      >
        <FormContainer />
      </GridItem>
      <GridItem
        colSpan={{
          lg: 3,
        }}
        /* order={{ base: 1, lg: 2 }} */
      >
        <Preview />
      </GridItem>
    </Grid>
  )
}

export default Builder
