import { COMBINED_COLORS } from '@/theme/combinedColors'
import { Path, Svg } from '@react-pdf/renderer'

interface Props {
  w?: string
  h?: string
  color?: string
  stroke?: string
}

const InfoCircle = ({ w, h, color, stroke }: Props) => {
  const defaultProps = {
    w: w || 20,
    h: h || 20,
    stroke: stroke || COMBINED_COLORS.zinc[200],
    color: color || COMBINED_COLORS.zinc[600],
  }
  return (
    <Svg
      width={defaultProps.w}
      height={defaultProps.h}
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke={defaultProps.stroke}
      fill={defaultProps.color}
    >
      <Path
        stroke='none'
        d='M0 0h24v24H0z'
        fill='none'
      />
      <Path
        d='M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z'
        strokeWidth='0'
        fill={defaultProps.color}
      />
    </Svg>
  )
}

export default InfoCircle
