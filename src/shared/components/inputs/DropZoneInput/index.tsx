import { Box, Flex, Icon, Image, Text, useDisclosure } from '@chakra-ui/react'
import { useCallback, useMemo, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { SimpleIconButton } from '../../buttons'
import { CircleMinus, CloudUpload } from '@/shared/icons'
import CropImg from './CropImg'

export const ASPECT_RATIO = 1
export const MIN_DIMENSION = 150

interface Props {
  limit: number
  accept: string[]
  multiple: boolean
  useCropImg: boolean
  minDimention?: number
  aspectRatio?: number
}

const fileTypesArray = [
  {
    key: 'image',
    value: ['image/jpeg', 'image/png', 'image/webp'],
  },
  {
    key: 'video',
    value: ['video/mp4', 'video/quicktime'],
  },
  {
    key: 'pdf',
    value: ['application/pdf'],
  },
  {
    key: 'excel',
    value: [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-excel',
    ],
  },
  {
    key: 'csv',
    value: ['text/csv'],
  },
]

const DropZoneInput = ({
  limit,
  accept,
  multiple,
  useCropImg,
  minDimention,
  aspectRatio,
}: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure({ defaultIsOpen: true })
  const [myFiles, setMyFiles] = useState<Array<string>>([])

  const onDrop = useCallback(
    (acceptedFiles: Array<File>) => {
      if (!multiple) {
        //validar el tamano imagen aqui

        const acceptedFilesUrls = URL.createObjectURL(acceptedFiles[0])
        setMyFiles([acceptedFilesUrls])
        return
      }
      const acceptedFilesUrls = acceptedFiles?.map((file) =>
        URL.createObjectURL(file)
      )
      setMyFiles([...myFiles, ...acceptedFilesUrls])
    },

    [myFiles]
  )

  const acceptedExtensions = useMemo(() => {
    const result = Object.fromEntries(
      accept.flatMap((fileType) => {
        const matchingObject = fileTypesArray.find(
          (obj) => obj.key === fileType
        )
        return matchingObject
          ? matchingObject.value.map((value) => [value, []])
          : []
      })
    )
    return result
  }, [accept])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: limit,
    accept: acceptedExtensions,
    multiple: multiple,
    disabled: myFiles.length >= limit,
  })

  const removeFile = (fileUrl: string) => {
    const newFiles = [...myFiles]
    newFiles.splice(newFiles.indexOf(fileUrl), 1)
    setMyFiles(newFiles)
    onOpen()
  }

  const updateSrc = (newUrl: string) => {
    setMyFiles([newUrl])
    onClose()
  }

  return (
    <>
      <Flex
        {...getRootProps()}
        bg='zinc.900'
        borderRadius={8}
        p={4}
        textAlign='center'
        border='2px dotted'
        borderColor='zinc.500'
        marginBlock={2}
        opacity={myFiles.length >= limit ? 0.5 : 1}
        gap={2}
        justify='center'
        align='center'
        direction='column'
      >
        <input {...getInputProps()} />
        <Icon fontSize={30}>
          <CloudUpload />
        </Icon>
        {isDragActive ? (
          <Text>Suelta la imagen aquí...</Text>
        ) : (
          <Text>
            Arrastre y suelte la imagen aquí o haga clic para seleccionar
          </Text>
        )}
        <Text fontSize={10}>{Object.keys(acceptedExtensions).join(', ')}</Text>
      </Flex>
      {myFiles.length > 0 && (
        <Flex
          gap={4}
          py={2}
        >
          {myFiles?.map((fileUrl, index) => (
            <Box
              position='relative'
              key={index}
            >
              <Image
                boxSize='100px'
                objectFit='cover'
                src={fileUrl}
                alt='img'
                borderRadius={8}
              />
              <SimpleIconButton
                icon={<CircleMinus />}
                aria-label='delete'
                onClick={() => removeFile(fileUrl)}
                bg='red.500'
                color='zinc.50'
                borderRadius='50%'
                _hover={{ bg: 'red.800' }}
                size='xs'
                position='absolute'
                top={-2}
                right={-2}
              />
            </Box>
          ))}
        </Flex>
      )}

      {isOpen && !multiple && useCropImg && myFiles.length > 0 && (
        <CropImg
          imageSrc={myFiles[0]}
          isOpen={isOpen}
          updateSrc={updateSrc}
          minDimention={minDimention}
          aspectRatio={aspectRatio}
        />
      )}
    </>
  )
}

export default DropZoneInput
