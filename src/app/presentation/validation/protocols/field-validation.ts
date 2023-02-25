import { ValidationErrorType } from '~/app/presentation/common/protocols'

export interface FieldValidation {
  field: string
  validate: (input: object, ...args: unknown[]) => ValidationError | undefined
}

export namespace FieldValidation {
  export type Params = {
    [field: string]: string
  }
}

export class ValidationError extends Error {
  constructor(errorName: string, public error: ValidationErrorType) {
    super(errorName)
  }
}
