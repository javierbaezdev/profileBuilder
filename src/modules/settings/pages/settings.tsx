import { useBuilderStore } from '@/modules/builder/store'
import { SimpleButton } from '@/shared/components/buttons'
import { ConfirmModal } from '@/shared/components/modals'
import { Restore } from '@/shared/icons'
import { Flex, Text, useDisclosure } from '@chakra-ui/react'

const settings = () => {
  const resetData = useBuilderStore((store) => store.resetData)
  const { isOpen, onToggle } = useDisclosure()

  const restoreStoreValues = () => {
    resetData('ALL_STORE')
    onToggle()
  }

  return (
    <Flex
      w='full'
      h='full'
      justify='center'
      align='center'
    >
      <Flex
        gap={2}
        border='1px dotted'
        borderColor='zinc.500'
        borderRadius={8}
        p={2}
        m={2}
        direction='column'
      >
        <Text
          fontSize={24}
          textAlign='center'
        >
          Ajustes
        </Text>
        <SimpleButton
          rightIcon={<Restore />}
          onClick={() => onToggle()}
          iconSpacing={1}
          colorScheme='orange'
        >
          Restaurar valores de la aplicación
        </SimpleButton>
      </Flex>
      {isOpen && (
        <ConfirmModal
          isOpen={isOpen}
          modalHeader='¿Restaurar estados iniciales?'
          modalDescription='Al restaurar los estados iniciales de la aplicación, se perderán todos los datos ingresados en el vc.'
          textConfirm='Si, restaurar'
          onClickConfirm={() => restoreStoreValues()}
          onClose={onToggle}
        />
      )}
    </Flex>
  )
}

export default settings
