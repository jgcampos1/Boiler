import { ContainerModule } from 'inversify'
import { makeApiUrlTenant, makeApiUrl } from '~/ioc/helpers'
import { ApiTypes } from '~/ioc/types'

export const TenantApiModule = new ContainerModule((bind) => {
  bind<string>(ApiTypes.TENANTS.LOAD_TENANTS_PUBLIC).toDynamicValue(() =>
    makeApiUrlTenant('tenants/public')
  )
  bind<string>(ApiTypes.TENANTS.LOAD_TENANT).toDynamicValue(() =>
    makeApiUrl('tenants')
  )
})
