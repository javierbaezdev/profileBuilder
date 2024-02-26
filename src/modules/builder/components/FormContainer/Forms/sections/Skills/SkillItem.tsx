import { SkillsItem } from '@/modules/builder/types'
import { Tag, TagCloseButton, TagLabel } from '@chakra-ui/react'

interface Props {
  data: SkillsItem
  deleteSkill: (work: SkillsItem) => void
}

const SkillItem = ({ data, deleteSkill }: Props) => {
  return (
    <Tag
      size='lg'
      colorScheme='zinc'
      borderRadius='full'
    >
      <TagLabel>{data.value}</TagLabel>
      <TagCloseButton onClick={() => deleteSkill(data)} />
    </Tag>
  )
}

export default SkillItem
