import { InvalidFieldError } from '~/app/presentation/validation/errors'
import {
  FieldValidation,
  ValidationError
} from '~/app/presentation/validation/protocols'

export class RequiredDependsOnValidation implements FieldValidation {
  constructor(
    readonly field: string,
    private readonly otherField: string,
    private readonly toEqualValue: any
  ) {}

  validate(input: FieldValidation.Params): ValidationError | undefined {
    return input[this.otherField] === this.toEqualValue && !input[this.field]
      ? new InvalidFieldError({
          name: 'exception:REQUIRED_FIELD'
        })
      : undefined
  }
}
