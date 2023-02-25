import { type ReactNode } from 'react'
import { Container } from './default-layout-styles'

interface Props {
  children: ReactNode
}
const BasicLayout = ({ children }: Props) => {
  return <Container>{children}</Container>
}

export default BasicLayout
