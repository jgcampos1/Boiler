import { ContainerModule } from 'inversify'
import { makeApiUrl } from '~/ioc/helpers'
import { ApiTypes } from '~/ioc/types'

export const PaymentLinkApiModule = new ContainerModule((bind) => {
  bind<string>(ApiTypes.PAYMENT_LINKS.CREATE_PAYMENT_LINK).toDynamicValue(() =>
    makeApiUrl('payment-links')
  )
  bind<string>(ApiTypes.PAYMENT_LINKS.LOAD_PAYMENT_LINKS).toDynamicValue(() =>
    makeApiUrl('payment-links')
  )
  bind<string>(ApiTypes.PAYMENT_LINKS.LOAD_PAYMENT_LINK_HASH).toDynamicValue(
    () => makeApiUrl('payment-links')
  )
  bind<string>(ApiTypes.PAYMENT_LINKS.CREATE_PAYMENT_LINK_HASH).toDynamicValue(
    () => makeApiUrl('v2/payment-links/pay')
  )
  bind<string>(ApiTypes.PAYMENT_LINKS.LOAD_PAYMENT_LINK).toDynamicValue(() =>
    makeApiUrl('payment-links')
  )
  bind<string>(ApiTypes.PAYMENT_LINKS.UPDATE_PAYMENT_LINK).toDynamicValue(() =>
    makeApiUrl('payment-links')
  )
  bind<string>(ApiTypes.PAYMENT_LINKS.ADD_PAYMENT_LINK_NOTE).toDynamicValue(
    () => makeApiUrl('payment-links')
  )
  bind<string>(ApiTypes.PAYMENT_LINKS.UPDATE_PAYMENT_LINK_NOTE).toDynamicValue(
    () => makeApiUrl('payment-links')
  )
  bind<string>(ApiTypes.PAYMENT_LINKS.LOAD_PAYMENT_LINK_NOTE).toDynamicValue(
    () => makeApiUrl('payment-links')
  )
  bind<string>(ApiTypes.PAYMENT_LINKS.DELETE_PAYMENT_LINK_NOTE).toDynamicValue(
    () => makeApiUrl('payment-links')
  )
  bind<string>(
    ApiTypes.PAYMENT_LINKS.UPDATE_PAYMENT_LINK_NOTE_PIN
  ).toDynamicValue(() => makeApiUrl('payment-links'))

  bind<string>(ApiTypes.PAYMENT_LINKS.UPLOAD_PAYMENT_LINK_IMAGE).toDynamicValue(
    () => makeApiUrl('payment-links')
  )

  bind<string>(ApiTypes.PAYMENT_LINKS.ACTIVATE_PAYMENT_LINK).toDynamicValue(
    () => makeApiUrl('payment-links')
  )

  bind<string>(ApiTypes.PAYMENT_LINKS.DEACTIVATE_PAYMENT_LINK).toDynamicValue(
    () => makeApiUrl('payment-links')
  )
})
