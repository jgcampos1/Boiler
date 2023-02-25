import { IconContent, Text, Wrapper } from './lined-item-text-styles'

type Props = {
  children: React.ReactNode
  className?: string
  textColor?: any
  icon?: React.ReactNode
}

const LinedItemText = ({
  children,
  className,
  textColor = 'gray',
  icon
}: Props) => {
  return (
    <Wrapper className={className}>
      <IconContent>{icon}</IconContent>
      <Text textColor={textColor}>{children}</Text>
    </Wrapper>
  )
}

export default LinedItemText
