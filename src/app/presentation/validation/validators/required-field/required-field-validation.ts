import { RequiredFieldError } from '~/app/presentation/validation/errors'
import {
  FieldValidation,
  ValidationError
} from '~/app/presentation/validation/protocols'

export class RequiredFieldValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(input: object): ValidationError | undefined {
    return input[this.field]
      ? undefined
      : new RequiredFieldError({
          name: 'exception:REQUIRED_FIELD'
        })
  }
}
