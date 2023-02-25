export interface Validation {
  validate: (
    fieldName: string,
    fieldValue: object,
    ...args: unknown[]
  ) => ValidationErrorType | undefined
}

export type ParsedError = {
  error: string
  option: any
}

export type ValidationErrorType = {
  name: string
  message?: string
  option?: {
    [key: string]: string | number
  }
}
