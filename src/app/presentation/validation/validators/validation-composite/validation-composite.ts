import { FieldValidation } from '~/app/presentation/validation/protocols'

import {
  Validation,
  ValidationErrorType
} from '~/app/presentation/common/protocols'

export class ValidationComposite implements Validation {
  private constructor(private readonly validators: FieldValidation[]) {}

  static build(validators: FieldValidation[]): ValidationComposite {
    return new ValidationComposite(validators)
  }

  validate(
    fieldName: string,
    input: object,
    ...args: unknown[]
  ): ValidationErrorType | undefined {
    const validators = this.validators.filter((v) => v.field === fieldName)
    for (const validator of validators) {
      const errorState = validator.validate(input, ...args)

      if (errorState?.error) return errorState.error
    }
  }
}
