import { ButtonTypesEnum } from '../../common/enums'
import Button from '../button/button'
import TextInput from '../text-input/text-input'

const LoginForm = () => {
  return (
    <>
      <TextInput
        name='email'
        label='Email or user'
        placeholder='exemplo@exemplo.com.br'
        type='email'
      />

      <TextInput
        name='password'
        label='Password'
        placeholder='Type your password'
        type='number'
      />

      <Button title='Sing in' buttonStyle={ButtonTypesEnum.ORDER_BUTTON} />
    </>
  )
}
export default LoginForm
