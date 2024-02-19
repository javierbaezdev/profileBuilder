import { Box, Flex, Icon, Image, Text, useDisclosure } from '@chakra-ui/react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { SimpleIconButton } from '../../buttons'
import { CircleMinus, CloudUpload } from '@/shared/icons'
import CropImg from './CropImg'

export const ASPECT_RATIO = 1
export const MIN_DIMENSION = 150

export type Accept = 'image' | 'video' | 'pdf' | 'excel' | 'csv'

interface Props {
  limit: number
  accept: Accept[]
  multiple: boolean
  useCropImg: boolean
  minDimention?: number
  aspectRatio?: number
  onChange: (filesUrl: string[]) => void
  value?: string[]
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
  onChange,
  value,
}: Props) => {
  const minDimentionFinal = minDimention || MIN_DIMENSION
  const { isOpen, onClose, onOpen } = useDisclosure({ defaultIsOpen: true })
  const [myFiles, setMyFiles] = useState<Array<string>>([])

  const isValidDimentionImg = async (url: string) => {
    return await new Promise((resolve, reject) => {
      let imageElement = document.createElement('img')
      imageElement.src = url
      imageElement.onload = () => {
        const { height, width } = imageElement
        const isValid = !(
          width < minDimentionFinal || height < minDimentionFinal
        )
        resolve(isValid)
      }
      imageElement.onerror = () => {
        reject(new Error('Failed to load image'))
      }
    })
  }

  const onDrop = useCallback(
    async (acceptedFiles: Array<File>) => {
      if (acceptedFiles.length === 0) {
        return
      }

      if (!multiple) {
        if (accept?.at(0) === 'image') {
          /* const compressed = await compressedImg(acceptedFiles[0]) */
          const acceptedImgUrl = URL.createObjectURL(acceptedFiles[0])
          const isValidImgDimention = await isValidDimentionImg(acceptedImgUrl)
          if (!isValidImgDimention) {
            return
          }
          setMyFiles([acceptedImgUrl])
          return
        } else {
          const acceptedFilesUrl = URL.createObjectURL(acceptedFiles[0])
          setMyFiles([acceptedFilesUrl])
          return
        }
      }

      //if multiple
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
    onChange(newFiles)
    onOpen()
  }

  const updateSrc = async (newUrl: string) => {
    setMyFiles([newUrl])
    onChange([newUrl])
    onClose()
  }

  useEffect(() => {
    if (value) {
      setMyFiles(value)
    }
  }, [value])

  return (
    <>
      <Flex
        {...getRootProps()}
        bg='zinc.900'
        borderRadius={8}
        p={4}
        border='2px dotted'
        borderColor='zinc.500'
        marginBlock={2}
        opacity={myFiles.length >= limit ? 0.5 : 1}
        gap={2}
        justify='center'
        align='center'
        direction='column'
        cursor='pointer'
        w='full'
      >
        <input {...getInputProps()} />
        <Icon fontSize={30}>
          <CloudUpload />
        </Icon>
        {isDragActive ? (
          <Text>
            Suelta la{' '}
            {accept?.length === 1 && accept?.at(0) === 'image'
              ? 'imagen '
              : 'archivo '}
            aquí...
          </Text>
        ) : (
          <Text>
            Arrastre y suelte la{' '}
            {accept?.length === 1 && accept?.at(0) === 'image'
              ? 'imagen '
              : 'archivo '}
            aquí o haga clic para seleccionar
          </Text>
        )}
        <Text fontSize={10}>
          Formatos permitidos: {Object.keys(acceptedExtensions).join(', ')}
        </Text>
        {!multiple && accept?.at(0) === 'image' && (
          <Text fontSize={10}>
            Dimenciones minimas: {minDimentionFinal}X{minDimentionFinal}
          </Text>
        )}
      </Flex>
      {myFiles.length === 1 && accept?.at(0) === 'image' && (
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

      {isOpen &&
        !multiple &&
        useCropImg &&
        myFiles.length === 1 &&
        accept?.at(0) === 'image' && (
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
