import { COMBINED_COLORS } from '@/theme/combinedColors'
import { Svg, Path } from '@react-pdf/renderer'

interface Props {
  w?: string
  h?: string
  color?: string
  stroke?: string
}

const MapPinFilled = ({ w, h, color, stroke }: Props) => {
  const defaultProps = {
    w: w || 12,
    h: h || 12,
    stroke: stroke || COMBINED_COLORS.zinc[200],
    color: color || COMBINED_COLORS.zinc[600],
  }

  return (
    <Svg
      width={defaultProps.w}
      height={defaultProps.h}
      viewBox='0 0 24 24'
      stroke={defaultProps.stroke}
      fill='none'
    >
      <Path
        stroke='none'
        d='M0 0h24v24H0z'
        fill='none'
      />
      <Path
        d='M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z'
        stroke-width='0'
        fill={defaultProps.color}
      />
    </Svg>
  )
}

export default MapPinFilled
