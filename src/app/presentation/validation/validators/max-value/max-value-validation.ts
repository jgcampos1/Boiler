import { InvalidFieldError } from '~/app/presentation/validation/errors'
import {
  FieldValidation,
  ValidationError
} from '~/app/presentation/validation/protocols'

export class MaxValueValidation implements FieldValidation {
  constructor(readonly field: string, private readonly maxValue: number) {}

  validate(input: object): ValidationError | undefined {
    const inputData = input[this.field] as string
    return Number(inputData) > Number(this.maxValue)
      ? new InvalidFieldError({
          name: 'exception:MAX_VALUE',
          option: { value: this.maxValue }
        })
      : undefined
  }
}
