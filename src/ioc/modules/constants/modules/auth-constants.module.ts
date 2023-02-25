import { ContainerModule } from 'inversify'
import { ConstantTypes } from '~/ioc/types'

export const AuthConstantsModule = new ContainerModule((bind) => {
  bind<string>(ConstantTypes.AUTH.TOKEN_KEY).toConstantValue('@inspire/token')
  bind<string>(ConstantTypes.AUTH.REFRESH_TOKEN_KEY).toConstantValue(
    '@inspire/refreshToken'
  )
})
