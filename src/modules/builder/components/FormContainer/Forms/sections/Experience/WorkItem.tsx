import { Work } from '@/modules/builder/types'
import { Flex } from '@chakra-ui/react'

interface Props {
  data?: Work
  selectedWork?: (work: Work) => void
}

const WorkItem = ({ data, selectedWork }: Props) => {
  return <Flex>item</Flex>
}

export default WorkItem
