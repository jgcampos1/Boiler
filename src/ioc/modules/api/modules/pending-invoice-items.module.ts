import { ContainerModule } from 'inversify'
import { makeApiUrl } from '~/ioc/helpers'
import { ApiTypes } from '~/ioc/types'

export const PendingInvoiceApiModule = new ContainerModule((bind) => {
  bind<string>(
    ApiTypes.PENDING_INVOICE_ITEMS.LOAD_PENDING_INVOICE_ITEMS
  ).toDynamicValue(() => makeApiUrl('pending-invoice-items'))
  bind<string>(
    ApiTypes.PENDING_INVOICE_ITEMS.CREATE_PENDING_INVOICE_ITEMS
  ).toDynamicValue(() => makeApiUrl('pending-invoice-items'))
  bind<string>(
    ApiTypes.PENDING_INVOICE_ITEMS.DELETE_PENDING_INVOICE_ITEMS
  ).toDynamicValue(() => makeApiUrl('pending-invoice-items'))
  bind<string>(
    ApiTypes.PENDING_INVOICE_ITEMS.UPDATE_PENDING_INVOICE_ITEMS
  ).toDynamicValue(() => makeApiUrl('pending-invoice-items'))
})
