import { ContainerModule } from 'inversify'
import { makeApiUrl } from '~/ioc/helpers'
import { ApiTypes } from '~/ioc/types'

export const GeneralApiModule = new ContainerModule((bind) => {
  bind<string>(ApiTypes.GENERAL.LOAD_BILLING_PERIOD).toDynamicValue(() =>
    makeApiUrl('billing-periods')
  )
  bind<string>(ApiTypes.GENERAL.LOAD_PRICING_MODEL).toDynamicValue(() =>
    makeApiUrl('pricing-models')
  )
  bind<string>(ApiTypes.GENERAL.LOAD_CURRENCY).toDynamicValue(() =>
    makeApiUrl('currencies')
  )
  bind<string>(ApiTypes.GENERAL.LOAD_RECURRING_METERED_USAGE).toDynamicValue(
    () => makeApiUrl('recurrings/recurring-metered-usages')
  )
  bind<string>(ApiTypes.GENERAL.LOAD_BILLING_TYPE).toDynamicValue(() =>
    makeApiUrl('billing-types')
  )
  bind<string>(ApiTypes.GENERAL.LOAD_RECURRING_USAGE_TYPE).toDynamicValue(() =>
    makeApiUrl('recurring-usage-types')
  )
  bind<string>(ApiTypes.GENERAL.LOAD_COUNTRIES).toDynamicValue(() =>
    makeApiUrl('countries')
  )
  bind<string>(ApiTypes.GENERAL.LOAD_LOGS).toDynamicValue(() =>
    makeApiUrl('api-logs')
  )
  bind<string>(ApiTypes.GENERAL.LOAD_EVENTS).toDynamicValue(() =>
    makeApiUrl('events')
  )
  bind<string>(ApiTypes.GENERAL.LOAD_TIMEZONES).toDynamicValue(() =>
    makeApiUrl('timezones')
  )
  bind<string>(ApiTypes.GENERAL.LOAD_LANGUAGES).toDynamicValue(() =>
    makeApiUrl('languages')
  )
  bind<string>(ApiTypes.GENERAL.LOAD_STATES).toDynamicValue(() =>
    makeApiUrl('states')
  )
  bind<string>(ApiTypes.GENERAL.LOAD_SPREEDLY_KEY).toDynamicValue(() =>
    makeApiUrl('payment-gateways/spreedly')
  )
  bind<string>(ApiTypes.GENERAL.LOAD_PAYMENT_GATEWAYS).toDynamicValue(() =>
    makeApiUrl('payment-gateways')
  )
})
