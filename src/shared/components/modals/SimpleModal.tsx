import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  useColorModeValue,
} from '@chakra-ui/react'

interface Props extends ModalProps {
  modalHeader: string | JSX.Element
  children: JSX.Element
}

const SimpleModal = ({ children, modalHeader, ...props }: Props) => {
  const bg = useColorModeValue('zinc.100', 'zinc.900')
  return (
    <Modal
      isCentered
      motionPreset='slideInBottom'
      size='lg'
      {...props}
    >
      <ModalOverlay />
      <ModalContent bg={bg}>
        <ModalHeader>{modalHeader}</ModalHeader>
        <ModalCloseButton bg='transparent' />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SimpleModal
