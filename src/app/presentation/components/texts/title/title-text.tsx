import type { TypographyProps } from '@mui/material'

import { Text } from './title-text-styles'

type Props = TypographyProps & {
  children: React.ReactNode
  colorType?: 'light' | 'dark'
  style?: React.CSSProperties
  maxWidth?: number
  toUpperCase?: boolean
  fontSize?: number
}

const TitleText: React.FC<Props> = ({
  children,
  colorType = 'dark',
  toUpperCase,
  fontSize,
  ...props
}) => {
  return (
    <Text {...props} {...{ toUpperCase, colorType }}>
      {children}
    </Text>
  )
}

export default TitleText
