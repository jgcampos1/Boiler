import { InvalidFieldError } from '~/app/presentation/validation/errors'
import {
  FieldValidation,
  ValidationError
} from '~/app/presentation/validation/protocols'

export class MinValueValidation implements FieldValidation {
  constructor(readonly field: string, private readonly minValue: number) {}

  validate(input: object): ValidationError | undefined {
    const inputData = input[this.field] as string
    return inputData !== '' && Number(inputData) < Number(this.minValue)
      ? new InvalidFieldError({
          name: 'exception:MIN_VALUE',
          option: { value: this.minValue }
        })
      : undefined
  }
}
