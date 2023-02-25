import { useMemo } from 'react'

import { InfraTypes } from '~/ioc/types'

import { MaskOptions } from '~/app/presentation/common/types'

import { MaskFormatter } from '../common/protocols'
import { useService } from './use-service'

export const useMaskFormatter = (mask?: MaskOptions) => {
  if (!mask) return null

  const formatters = {
    cvv: useService<MaskFormatter>(InfraTypes.FORMATTERS.CVV_MASK_FORMATTER),
    cardnumber: useService<MaskFormatter>(
      InfraTypes.FORMATTERS.CARDNUMBER_MASK_FORMATTER
    ),
    cep: useService<MaskFormatter>(InfraTypes.FORMATTERS.CEP_MASK_FORMATTER),
    phonenumber: useService<MaskFormatter>(
      InfraTypes.FORMATTERS.PHONENUMBER_MASK_FORMATTER
    ),
    cpf: useService<MaskFormatter>(InfraTypes.FORMATTERS.CPF_MASK_FORMATTER),
    cnpj: useService<MaskFormatter>(InfraTypes.FORMATTERS.CNPJ_MASK_FORMATTER),
    amount: useService<MaskFormatter>(
      InfraTypes.FORMATTERS.AMOUNT_MASK_FORMATTER
    )
  } as const

  return useMemo(() => formatters[mask], [mask])
}
