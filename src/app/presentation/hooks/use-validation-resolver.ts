import { useCallback } from 'react'

import { Validation, ValidationErrorType } from '../common/protocols'

export const useValidationResolver = (validationSchema?: Validation) => {
  return useCallback(
    (values: object) => {
      if (!validationSchema) {
        return {
          values,
          errors: {}
        }
      }

      let errors: Array<[string, ValidationErrorType | undefined]> = []
      for (const name in values) {
        const errorMessage = validationSchema.validate(name, values)

        errors = [...errors, [name, errorMessage]]
        errors = errors.filter(([, error]) => !!error)
      }

      if (errors.length > 0) {
        return {
          values: {},
          errors: Object.fromEntries<ValidationErrorType | undefined>(errors)
        }
      }

      return {
        values,
        errors: {}
      }
    },
    [validationSchema]
  )
}
