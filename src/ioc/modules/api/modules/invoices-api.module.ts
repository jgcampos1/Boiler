import { ContainerModule } from 'inversify'
import { makeApiUrl } from '~/ioc/helpers'
import { ApiTypes } from '~/ioc/types'

export const InvoicesApiModule = new ContainerModule((bind) => {
  bind<string>(ApiTypes.INVOICES.LOAD_INVOICE).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.INVOICES.LOAD_INVOICES).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.INVOICES.UPDATE).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.INVOICES.LOAD_NOTES).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.INVOICES.ADD_NOTE).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.INVOICES.DELETE_NOTE).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.INVOICES.UPDATE_NOTE).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.INVOICES.UPDATE_NOTE_PIN).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.INVOICES.ADD_INVOICE).toDynamicValue(() =>
    makeApiUrl('invoices/draft')
  )
  bind<string>(ApiTypes.INVOICES.LOAD_CREDIT_NOTES).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.INVOICES.CHARGE_CUSTOMER).toDynamicValue(() =>
    makeApiUrl('payments')
  )
  bind<string>(ApiTypes.INVOICES.UPDATE_STATUS).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.INVOICES.DUPLICATE).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.INVOICES.DELETE_DRAFT).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.INVOICES.UPDATE_INVOICE_DRAFT).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.INVOICES.LOAD_PDF).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.INVOICES.SEND_INVOICE_RECEIPT_EMAIL).toDynamicValue(
    () => makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.INVOICES.SEND_INVOICE_EMAIL).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.INVOICES.LOAD_INVOICE_RECEIPT_PDF).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.INVOICES.ADD_INVOICE_CONFIRM).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.INVOICES.ADD_INVOICE_ITEMS).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.INVOICES.DELETE_INVOICE_ITEMS).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.INVOICES.UPDATE_INVOICE_ITEMS).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.INVOICES.DELETE_INVOICE_ITEM_COUPON).toDynamicValue(
    () => makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.INVOICES.DELETE_INVOICE_COUPON).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.INVOICES.ADD_INVOICE_COUPON).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.INVOICES.ADD_INVOICE_ITEM_COUPON).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
  bind<string>(ApiTypes.INVOICES.CREATE_INVOICE_NOW).toDynamicValue(() =>
    makeApiUrl('invoices/invoice-now')
  )
  bind<string>(ApiTypes.INVOICES.LOAD_INVOICE_HASH).toDynamicValue(() =>
    makeApiUrl('invoices/hash')
  )
  bind<string>(ApiTypes.INVOICES.ADD_INVOICE_HASH).toDynamicValue(() =>
    makeApiUrl('v2/invoices/pay')
  )
  bind<string>(ApiTypes.INVOICES.LOAD_PUBLIC_PDF).toDynamicValue(() =>
    makeApiUrl('invoices')
  )
})
