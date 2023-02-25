import { ContainerModule } from 'inversify'
import { makeApiUrl } from '~/ioc/helpers'
import { ApiTypes } from '~/ioc/types'

export const OrdersApiModule = new ContainerModule((bind) => {
  bind<string>(ApiTypes.ORDERS.LOAD_ORDERS).toDynamicValue(() =>
    makeApiUrl('orders')
  )
  bind<string>(ApiTypes.ORDERS.LOAD_ORDER).toDynamicValue(() =>
    makeApiUrl('orders')
  )
  bind<string>(ApiTypes.ORDERS.ADD_NOTE).toDynamicValue(() =>
    makeApiUrl('orders')
  )
  bind<string>(ApiTypes.ORDERS.UPDATE_NOTE).toDynamicValue(() =>
    makeApiUrl('orders')
  )
  bind<string>(ApiTypes.ORDERS.DELETE_NOTE).toDynamicValue(() =>
    makeApiUrl('orders')
  )
  bind<string>(ApiTypes.ORDERS.UPDATE_NOTE_PIN).toDynamicValue(() =>
    makeApiUrl('orders')
  )
  bind<string>(ApiTypes.ORDERS.LOAD_NOTES).toDynamicValue(() =>
    makeApiUrl('orders')
  )
  bind<string>(ApiTypes.ORDERS.LOAD_ITEMS).toDynamicValue(() =>
    makeApiUrl('orders')
  )
  bind<string>(ApiTypes.ORDERS.ADD_ORDER_HASH).toDynamicValue(() =>
    makeApiUrl('orders')
  )
  bind<string>(ApiTypes.ORDERS.LOAD_ORDER_HASH).toDynamicValue(() =>
    makeApiUrl('orders/hash')
  )
  bind<string>(ApiTypes.ORDERS.CANCEL_ORDER).toDynamicValue(() =>
    makeApiUrl('orders')
  )
  bind<string>(ApiTypes.ORDERS.LOAD_PDF).toDynamicValue(() =>
    makeApiUrl('orders')
  )
})
