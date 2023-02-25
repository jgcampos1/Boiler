import { injectable } from 'inversify'

import { MaskFormatter } from '~/app/presentation/common/protocols'

@injectable()
export class AmountMaskFormatter implements MaskFormatter {
  format(value: string) {
    // eslint-disable-next-line
    return value.indexOf('.') >= 0
      ? value.substr(0, value.indexOf('.')) +
          value.substr(value.indexOf('.'), 3)
      : value
  }
}
