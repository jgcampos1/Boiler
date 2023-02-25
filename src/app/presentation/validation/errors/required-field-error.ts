import { ValidationErrorType } from '~/app/presentation/common/protocols'

import { ValidationError } from '../protocols'

export class RequiredFieldError extends ValidationError {
  constructor(error: ValidationErrorType) {
    super('RequiredFieldError', error)
  }
}
