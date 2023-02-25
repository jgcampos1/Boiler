import { Container, Content } from './login-styles'

import { TitleText, LoginForm } from '../../components'
import FormProvider from '../../providers/form-provider'
import { ValidationTypes } from '~/ioc/types/validation'
import { useService } from '../../hooks'
import { Validation } from '../../common/protocols'

const Home = () => {
  const validationSchema = useService<Validation>(
    ValidationTypes.AUTH.SIGN_IN_FORM
  )

  return (
    <Container>
      <Content>
        <TitleText toUpperCase fontSize={28}>
          Login
        </TitleText>

        <FormProvider mode='onSubmit' validationSchema={validationSchema}>
          <LoginForm />
        </FormProvider>
      </Content>
    </Container>
  )
}

export default Home
