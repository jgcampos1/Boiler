import { RequiredFieldError } from '~/app/presentation/validation/errors'
import {
  FieldValidation,
  ValidationError
} from '~/app/presentation/validation/protocols'

export class OneOrAnotherValidation implements FieldValidation {
  constructor(readonly field: string, private readonly otherField: string) {}

  validate(input: object): ValidationError | undefined {
    return input[this.field] || input[this.otherField]
      ? undefined
      : new RequiredFieldError({
          name: 'exception:REQUIRED_FIELD'
        })
  }
}
