import { injectable } from 'inversify'

import { MaskFormatter } from '~/app/presentation/common/protocols'

@injectable()
export class CepMaskFormatter implements MaskFormatter {
  format(value: string) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1')
  }
}
