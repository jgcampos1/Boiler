import { InvalidFieldError } from '~/app/presentation/validation/errors'
import {
  FieldValidation,
  ValidationError
} from '~/app/presentation/validation/protocols'

export class IsNotEmptyValidation implements FieldValidation {
  constructor(
    readonly field: string,
    private readonly customMessage?: string
  ) {}

  validate(input: object): ValidationError | undefined {
    const inputData = input[this.field]
    return Array.isArray(inputData) && inputData?.length <= 0
      ? new InvalidFieldError({
          name: this.customMessage ?? 'exception:IS_EMPTY'
        })
      : undefined
  }
}
