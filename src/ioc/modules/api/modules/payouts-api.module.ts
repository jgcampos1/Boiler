import { ContainerModule } from 'inversify'
import { makeApiUrl } from '~/ioc/helpers'
import { ApiTypes } from '~/ioc/types'

export const PayoutsApiModule = new ContainerModule((bind) => {
  bind<string>(ApiTypes.PAYOUTS.LOAD_PAYOUTS).toDynamicValue(() =>
    makeApiUrl('payouts')
  )
})
