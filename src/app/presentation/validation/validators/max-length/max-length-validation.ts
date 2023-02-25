import { InvalidFieldError } from '~/app/presentation/validation/errors'
import {
  FieldValidation,
  ValidationError
} from '~/app/presentation/validation/protocols'

export class MaxLengthValidation implements FieldValidation {
  constructor(readonly field: string, private readonly maxLength: number) {}

  validate(input: object): ValidationError | undefined {
    const inputData = input[this.field] as string
    return inputData?.length > this.maxLength
      ? new InvalidFieldError({
          name: 'exception:MAX_LENGTH',
          option: { length: this.maxLength }
        })
      : undefined
  }
}
