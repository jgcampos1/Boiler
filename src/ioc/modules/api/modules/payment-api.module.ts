import { ContainerModule } from 'inversify'
import { makeApiUrl } from '~/ioc/helpers'
import { ApiTypes } from '~/ioc/types'

export const PaymentApiModule = new ContainerModule((bind) => {
  bind<string>(ApiTypes.PAYMENTS.LOAD_PAYMENTS).toDynamicValue(() =>
    makeApiUrl('payments')
  )
  bind<string>(ApiTypes.PAYMENTS.CREATE_PAYMENT).toDynamicValue(() =>
    makeApiUrl('payments')
  )
  bind<string>(ApiTypes.PAYMENTS.CREATE_RECURRING_PAYMENT).toDynamicValue(() =>
    makeApiUrl('subscriptions')
  )
  bind<string>(ApiTypes.PAYMENTS.LOAD_PAYMENT).toDynamicValue(() =>
    makeApiUrl('payments')
  )
  bind<string>(ApiTypes.PAYMENTS.UPDATE).toDynamicValue(() =>
    makeApiUrl('payments')
  )
  bind<string>(ApiTypes.PAYMENTS.LOAD_NOTES).toDynamicValue(() =>
    makeApiUrl('payments')
  )
  bind<string>(ApiTypes.PAYMENTS.ADD_NOTE).toDynamicValue(() =>
    makeApiUrl('payments')
  )
  bind<string>(ApiTypes.PAYMENTS.DELETE_NOTE).toDynamicValue(() =>
    makeApiUrl('payments')
  )
  bind<string>(ApiTypes.PAYMENTS.UPDATE_NOTE).toDynamicValue(() =>
    makeApiUrl('payments')
  )
  bind<string>(ApiTypes.PAYMENTS.UPDATE_NOTE_PIN).toDynamicValue(() =>
    makeApiUrl('payments')
  )
})
