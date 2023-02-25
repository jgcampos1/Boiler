import { InvalidFieldError } from '~/app/presentation/validation/errors'
import {
  FieldValidation,
  ValidationError
} from '~/app/presentation/validation/protocols'

export class CompareFieldsValidation implements FieldValidation {
  constructor(
    readonly field: string,
    private readonly fieldToCompare: string,
    private readonly messageMismatch: string
  ) {}

  validate(input: object): ValidationError | undefined {
    return input[this.field] !== input[this.fieldToCompare]
      ? new InvalidFieldError({
          name: this.messageMismatch ?? 'exception:MISMATCH_FIELD'
        })
      : undefined
  }
}
