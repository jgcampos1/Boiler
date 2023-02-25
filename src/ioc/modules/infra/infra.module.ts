import { ContainerModule } from 'inversify'
import { InfraTypes } from '~/ioc/types'

import type { CacheStorage } from '~/app/data/protocols/cache-storage'
import type { TokenDecoder } from '~/app/data/protocols/decoder'
import type { HttpClient } from '~/app/data/protocols/http'

import { LocalStorageCacheStorage } from '~/app/domain/infra/cache'
import { JWTTokenDecoder } from '~/app/domain/infra/decoder'
import {
  CardnumberMaskFormatter,
  CVVMaskFormatter,
  CepMaskFormatter,
  PhoneNumberMaskFormatter,
  CnpjMaskFormatter,
  CpfMaskFormatter,
  AmountMaskFormatter
} from '~/app/domain/infra/formatter'
import { AuthorizedHttpClient, AxiosHttpClient } from '~/app/domain/infra/http/'

import { MaskFormatter } from '~/app/presentation/common/protocols'

const InfraClientModule = new ContainerModule((bind) => {
  bind<HttpClient>(InfraTypes.HTTP_CLIENT)
    .to(AxiosHttpClient)
    .inSingletonScope()
  bind<TokenDecoder>(InfraTypes.TOKEN_DECODER)
    .to(JWTTokenDecoder)
    .inTransientScope()
  bind<CacheStorage>(InfraTypes.CACHE_STORAGE).to(LocalStorageCacheStorage)
  bind<HttpClient>(InfraTypes.AUTHORIZE_HTTP_CLIENT)
    .to(AuthorizedHttpClient)
    .inSingletonScope()

  bind<MaskFormatter>(InfraTypes.FORMATTERS.CARDNUMBER_MASK_FORMATTER).to(
    CardnumberMaskFormatter
  )
  bind<MaskFormatter>(InfraTypes.FORMATTERS.CVV_MASK_FORMATTER).to(
    CVVMaskFormatter
  )
  bind<MaskFormatter>(InfraTypes.FORMATTERS.CEP_MASK_FORMATTER).to(
    CepMaskFormatter
  )
  bind<MaskFormatter>(InfraTypes.FORMATTERS.PHONENUMBER_MASK_FORMATTER).to(
    PhoneNumberMaskFormatter
  )
  bind<MaskFormatter>(InfraTypes.FORMATTERS.CPF_MASK_FORMATTER).to(
    CpfMaskFormatter
  )
  bind<MaskFormatter>(InfraTypes.FORMATTERS.CNPJ_MASK_FORMATTER).to(
    CnpjMaskFormatter
  )
  bind<MaskFormatter>(InfraTypes.FORMATTERS.AMOUNT_MASK_FORMATTER).to(
    AmountMaskFormatter
  )
})

export const InfraModule = [InfraClientModule]
