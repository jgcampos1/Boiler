import { ContainerModule } from 'inversify'
import { makeApiUrl } from '~/ioc/helpers'
import { ApiTypes } from '~/ioc/types'

export const CustomerApiModule = new ContainerModule((bind) => {
  bind<string>(ApiTypes.CUSTOMERS.LOAD_CUSTOMER_PAYMENT_METHODS).toDynamicValue(
    () => makeApiUrl('customers')
  )
  bind<string>(ApiTypes.CUSTOMERS.LOAD_CUSTOMER_PAYMENT_METHOD).toDynamicValue(
    () => makeApiUrl('customers')
  )
  bind<string>(ApiTypes.CUSTOMERS.LOAD_CUSTOMERS).toDynamicValue(() =>
    makeApiUrl('customers')
  )
  bind<string>(ApiTypes.CUSTOMERS.ADD_CUSTOMER).toDynamicValue(() =>
    makeApiUrl('customers')
  )
  bind<string>(ApiTypes.CUSTOMERS.UPDATE_METADATA).toDynamicValue(() =>
    makeApiUrl('customers')
  )
  bind<string>(ApiTypes.CUSTOMERS.UPDATE_COUPON).toDynamicValue(() =>
    makeApiUrl('customers')
  )
  bind<string>(ApiTypes.CUSTOMERS.LOAD_CUSTOMER).toDynamicValue(() =>
    makeApiUrl('customers')
  )
  bind<string>(ApiTypes.CUSTOMERS.DELETE_CUSTOMER).toDynamicValue(() =>
    makeApiUrl('customers')
  )
  bind<string>(ApiTypes.CUSTOMERS.UPDATE_CUSTOMER).toDynamicValue(() =>
    makeApiUrl('customers')
  )
  bind<string>(ApiTypes.CUSTOMERS.ADD_CUSTOMER_ACH).toDynamicValue(() =>
    makeApiUrl('customer-accounts')
  )
  bind<string>(
    ApiTypes.CUSTOMERS.LOAD_CUSTOMER_ACCOUNT_HOLDER_TYPES
  ).toDynamicValue(() => makeApiUrl('customer-account-holder-types'))
  bind<string>(ApiTypes.CUSTOMERS.ADD_CUSTOMER_NOTES).toDynamicValue(() =>
    makeApiUrl('customers')
  )
  bind<string>(ApiTypes.CUSTOMERS.LOAD_CUSTOMER_NOTES).toDynamicValue(() =>
    makeApiUrl('customers')
  )
  bind<string>(ApiTypes.CUSTOMERS.DELETE_CUSTOMER_NOTES).toDynamicValue(() =>
    makeApiUrl('customers')
  )
  bind<string>(ApiTypes.CUSTOMERS.UPDATE_CUSTOMER_NOTES).toDynamicValue(() =>
    makeApiUrl('customers')
  )
  bind<string>(
    ApiTypes.CUSTOMERS.DELETE_CUSTOMER_PAYMENT_METHOD
  ).toDynamicValue(() => makeApiUrl('customers'))
  bind<string>(
    ApiTypes.CUSTOMERS.UPDATE_CUSTOMER_PAYMENT_METHODS
  ).toDynamicValue(() => makeApiUrl('customers'))
  bind<string>(
    ApiTypes.CUSTOMERS.UPDATE_CUSTOMER_PAYMENT_METHOD
  ).toDynamicValue(() => makeApiUrl('customers'))
  bind<string>(ApiTypes.CUSTOMERS.ADD_CUSTOMER_PAYMENT_METHOD).toDynamicValue(
    () => makeApiUrl('v2/customers')
  )
})
