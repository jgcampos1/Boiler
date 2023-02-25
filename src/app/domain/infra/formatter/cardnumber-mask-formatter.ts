import { injectable } from 'inversify'

import { MaskFormatter } from '~/app/presentation/common/protocols'

@injectable()
export class CardnumberMaskFormatter implements MaskFormatter {
  format(value: string) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .substring(0, 19)
      .replace(/\\/, '')
      .replace(/\//, '')
  }
}
