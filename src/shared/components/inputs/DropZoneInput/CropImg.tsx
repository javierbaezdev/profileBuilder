import { Flex } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { SimpleModal } from '../../modals'
import ReactCrop, {
  Crop,
  centerCrop,
  convertToPixelCrop,
  makeAspectCrop,
} from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { SimpleButton } from '../../buttons'
import { DeviceFloppy } from '@/shared/icons'
import setCanvasPreview from './setCanvasPreview'
import { ASPECT_RATIO, MIN_DIMENSION } from '.'

interface Props {
  imageSrc: string
  updateSrc: (url: string) => void
  isOpen: boolean
  minDimention?: number
  aspectRatio?: number
}

const CropImg = ({
  imageSrc,
  updateSrc,
  isOpen,
  minDimention,
  aspectRatio,
}: Props) => {
  const imgRef = useRef<HTMLImageElement | null>(null)
  const previewCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const [crop, setCrop] = useState<Crop>()

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const { width, height } = e.currentTarget
    const minDimentionFinal = minDimention || MIN_DIMENSION
    const cropWidthInPercent = (minDimentionFinal / width) * 100

    const crop = makeAspectCrop(
      {
        unit: '%',
        width: cropWidthInPercent,
      },
      aspectRatio || ASPECT_RATIO,
      width,
      height
    )
    const centeredCrop = centerCrop(crop, width, height)
    setCrop(centeredCrop)
  }

  const generateNewImageSrc = () => {
    if (imgRef.current && previewCanvasRef.current && crop) {
      setCanvasPreview(
        imgRef.current,
        previewCanvasRef.current,
        convertToPixelCrop(crop, imgRef.current.width, imgRef.current.height)
      )
      const dataUrl = previewCanvasRef.current.toDataURL()
      updateSrc(dataUrl)
    }
  }

  return (
    <SimpleModal
      isOpen={isOpen}
      onClose={() => {}}
      modalHeader='Ajustar imagen'
      size='xl'
      showCloseButton={false}
    >
      <Flex
        direction='column'
        gap={4}
        justify='center'
        align='center'
        w='full'
      >
        <Flex
          border='1px solid'
          borderColor='zinc.100'
        >
          <ReactCrop
            crop={crop}
            onChange={(c) => setCrop(c)}
            keepSelection
            aspect={aspectRatio || ASPECT_RATIO}
            minWidth={minDimention || MIN_DIMENSION}
          >
            <img
              ref={imgRef}
              src={imageSrc}
              onLoad={(e) => onImageLoad(e)}
            />
          </ReactCrop>
        </Flex>
        <Flex
          justify='flex-end'
          w='full'
        >
          <SimpleButton
            rightIcon={<DeviceFloppy />}
            size='xs'
            iconSpacing={1}
            onClick={() => generateNewImageSrc()}
          >
            Confirmar
          </SimpleButton>
        </Flex>
        {crop && (
          <canvas
            ref={previewCanvasRef}
            style={{
              display: 'none',
              objectFit: 'contain',
            }}
          />
        )}
      </Flex>
    </SimpleModal>
  )
}

export default CropImg
