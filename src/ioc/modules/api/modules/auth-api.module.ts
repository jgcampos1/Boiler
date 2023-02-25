import { ContainerModule } from 'inversify'
import { makeApiUrlTenant } from '~/ioc/helpers'
import { ApiTypes } from '~/ioc/types'

export const AuthApiModule = new ContainerModule((bind) => {
  bind<string>(ApiTypes.AUTH.USER_LOGOUT).toConstantValue('/api/logout')
  bind<string>(ApiTypes.AUTH.REFRESH_USER_TOKEN).toDynamicValue(() =>
    makeApiUrlTenant('auth/refresh-token')
  )
})
