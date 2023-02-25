import { injectable } from 'inversify'

import { MaskFormatter } from '~/app/presentation/common/protocols'

@injectable()
export class CVVMaskFormatter implements MaskFormatter {
  format(value: string) {
    return value
      .replace(/\D/g, '')
      .substring(0, 4)
      .replace(/\\/, '')
      .replace(/\//, '')
  }
}
