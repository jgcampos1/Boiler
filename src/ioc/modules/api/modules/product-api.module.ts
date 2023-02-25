import { ContainerModule } from 'inversify'
import { makeApiUrl } from '~/ioc/helpers'
import { ApiTypes } from '~/ioc/types'

export const ProductApiModule = new ContainerModule((bind) => {
  bind<string>(ApiTypes.PRODUCTS.LOAD_PRODUCTS).toDynamicValue(() =>
    makeApiUrl('products')
  )
  bind<string>(ApiTypes.PRODUCTS.LOAD_PRODUCT).toDynamicValue(() =>
    makeApiUrl('products')
  )
  bind<string>(ApiTypes.PRODUCTS.CREATE).toDynamicValue(() =>
    makeApiUrl('products')
  )
  bind<string>(ApiTypes.PRODUCTS.UPLOAD_IMAGE).toDynamicValue(() =>
    makeApiUrl('products')
  )
  bind<string>(ApiTypes.PRODUCTS.DELETE).toDynamicValue(() =>
    makeApiUrl('products')
  )
  bind<string>(ApiTypes.PRODUCTS.UPDATE).toDynamicValue(() =>
    makeApiUrl('products')
  )
  bind<string>(ApiTypes.PRODUCTS.LOAD_PRODUCT_PRICE).toDynamicValue(() =>
    makeApiUrl('product-prices')
  )
  bind<string>(ApiTypes.PRODUCTS.UPDATE_PRICE).toDynamicValue(() =>
    makeApiUrl('product-prices')
  )
  bind<string>(ApiTypes.PRODUCTS.DELETE_PRICE).toDynamicValue(() =>
    makeApiUrl('product-prices')
  )
  bind<string>(ApiTypes.PRODUCTS.CREATE_PRICE).toDynamicValue(() =>
    makeApiUrl('product-prices')
  )
  bind<string>(ApiTypes.PRODUCTS.LOAD_PRODUCT_PRICES).toDynamicValue(() =>
    makeApiUrl('product-prices')
  )
})
