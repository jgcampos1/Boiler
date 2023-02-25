import { ContainerModule } from 'inversify'
import { makeApiUrl } from '~/ioc/helpers'
import { ApiTypes } from '~/ioc/types'

export const SubscriptionApiModule = new ContainerModule((bind) => {
  bind<string>(ApiTypes.SUBSCRIPTIONS.LOAD_SUBSCRIPTIONS).toDynamicValue(() =>
    makeApiUrl('subscriptions')
  )
  bind<string>(ApiTypes.SUBSCRIPTIONS.LOAD_SUBSCRIPTION).toDynamicValue(() =>
    makeApiUrl('subscriptions')
  )
  bind<string>(ApiTypes.SUBSCRIPTIONS.UPDATE).toDynamicValue(() =>
    makeApiUrl('subscriptions')
  )

  bind<string>(ApiTypes.SUBSCRIPTIONS.CANCEL_SUBSCRIPTION).toDynamicValue(() =>
    makeApiUrl('subscriptions')
  )

  bind<string>(
    ApiTypes.SUBSCRIPTIONS.LOAD_SUBSCRIPTIONS_INVOICES
  ).toDynamicValue(() => makeApiUrl('subscriptions'))

  bind<string>(
    ApiTypes.SUBSCRIPTIONS.PAUSE_SUBSCRIPTION_PAYMENT_COLLECTION
  ).toDynamicValue(() => makeApiUrl('subscriptions'))

  bind<string>(
    ApiTypes.SUBSCRIPTIONS.RESTART_SUBSCRIPTION_ITEMS
  ).toDynamicValue(() => makeApiUrl('subscriptions'))

  bind<string>(ApiTypes.SUBSCRIPTIONS.ADD_SUBSCRIPTION_ITEMS).toDynamicValue(
    () => makeApiUrl('subscriptions')
  )
  bind<string>(ApiTypes.SUBSCRIPTIONS.DELETE_SUBSCRIPTION_ITEMS).toDynamicValue(
    () => makeApiUrl('subscriptions')
  )
  bind<string>(ApiTypes.SUBSCRIPTIONS.UPDATE_SUBSCRIPTION_ITEMS).toDynamicValue(
    () => makeApiUrl('subscriptions')
  )
  bind<string>(ApiTypes.SUBSCRIPTIONS.UNCANCEL_SUBSCRIPTION).toDynamicValue(
    () => makeApiUrl('subscriptions')
  )

  bind<string>(
    ApiTypes.SUBSCRIPTIONS.DELETE_SUBSCRIPTION_COUPON
  ).toDynamicValue(() => makeApiUrl('subscriptions'))
  bind<string>(ApiTypes.SUBSCRIPTIONS.ADD_SUBSCRIPTION_COUPON).toDynamicValue(
    () => makeApiUrl('subscriptions')
  )
  bind<string>(ApiTypes.SUBSCRIPTIONS.LOAD_SUBSCRIPTION_COUPONS).toDynamicValue(
    () => makeApiUrl('subscriptions')
  )
})
