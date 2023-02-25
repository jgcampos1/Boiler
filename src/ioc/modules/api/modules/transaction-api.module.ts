import { ContainerModule } from 'inversify'
import { makeApiUrl } from '~/ioc/helpers'
import { ApiTypes } from '~/ioc/types'

export const TransactionApiModule = new ContainerModule((bind) => {
  bind<string>(ApiTypes.TRANSACTIONS.LOAD_TRANSACTIONS).toDynamicValue(() =>
    makeApiUrl('transactions')
  )
  bind<string>(ApiTypes.TRANSACTIONS.LOAD_RECEIPT_HISTORIES).toDynamicValue(
    () => makeApiUrl('transactions')
  )
  bind<string>(ApiTypes.TRANSACTIONS.CREATE_RECEIPT_HISTORIES).toDynamicValue(
    () => makeApiUrl('transactions')
  )
  bind<string>(ApiTypes.TRANSACTIONS.LOAD_REFUND_REASONS).toDynamicValue(() =>
    makeApiUrl('transaction-refund-reasons')
  )
  bind<string>(ApiTypes.TRANSACTIONS.CREATE_TRANSACTION_REFUND).toDynamicValue(
    () => makeApiUrl('payments')
  )
})
