import { ContainerModule } from 'inversify'
import { makeApiUrl } from '~/ioc/helpers'
import { ApiTypes } from '~/ioc/types'

export const CouponApiModule = new ContainerModule((bind) => {
  bind<string>(ApiTypes.COUPONS.LOAD_COUPONS).toDynamicValue(() =>
    makeApiUrl('coupons')
  )
  bind<string>(ApiTypes.COUPONS.ADD_COUPON).toDynamicValue(() =>
    makeApiUrl('coupons')
  )
  bind<string>(ApiTypes.COUPONS.LOAD_COUPON).toDynamicValue(() =>
    makeApiUrl('coupons')
  )
  bind<string>(ApiTypes.COUPONS.UPDATE_COUPON).toDynamicValue(() =>
    makeApiUrl('coupons')
  )
  bind<string>(ApiTypes.COUPONS.DELETE_COUPON).toDynamicValue(() =>
    makeApiUrl('coupons')
  )
  bind<string>(ApiTypes.COUPONS.UPDATE_COUPON_CODE_ARCHIVE).toDynamicValue(() =>
    makeApiUrl('coupons')
  )
  bind<string>(ApiTypes.COUPONS.UPDATE_COUPON_CODE_UNARCHIVE).toDynamicValue(
    () => makeApiUrl('coupons')
  )
  bind<string>(ApiTypes.COUPONS.ADD_COUPON_CODE).toDynamicValue(() =>
    makeApiUrl('coupons')
  )
  bind<string>(ApiTypes.COUPONS.UPDATE_COUPON_CODE).toDynamicValue(() =>
    makeApiUrl('coupons')
  )
  bind<string>(ApiTypes.COUPONS.LOAD_COUPON_CODE).toDynamicValue(() =>
    makeApiUrl('coupons')
  )
  bind<string>(ApiTypes.COUPONS.LOAD_COUPON_CODES).toDynamicValue(() =>
    makeApiUrl('coupons')
  )
  bind<string>(ApiTypes.COUPONS.LOAD_COUPON_BY_CODE).toDynamicValue(() =>
    makeApiUrl('coupons/find')
  )
  bind<string>(
    ApiTypes.COUPONS.LOAD_COUPON_VALIDATION_SUBSCRIPTION
  ).toDynamicValue(() => makeApiUrl('coupons'))
})
