import { Container, Content } from './home-styles'

import { TitleText } from '../../components'

const Home = () => (
  <Container>
    <Content>
      <TitleText toUpperCase fontSize={28}>
        Olá, bem vindo ao boiler
      </TitleText>
    </Content>
  </Container>
)

export default Home
