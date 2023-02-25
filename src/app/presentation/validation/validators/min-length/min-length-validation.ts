import { InvalidFieldError } from '~/app/presentation/validation/errors'
import {
  FieldValidation,
  ValidationError
} from '~/app/presentation/validation/protocols'

export class MinLengthValidation implements FieldValidation {
  constructor(readonly field: string, private readonly minLength: number) {}

  validate(input: object): ValidationError | undefined {
    const inputLength = input[this.field]?.length
    return inputLength !== 0 && inputLength < this.minLength
      ? new InvalidFieldError({
          name: 'exception:MIN_LENGTH',
          option: { length: this.minLength }
        })
      : undefined
  }
}
