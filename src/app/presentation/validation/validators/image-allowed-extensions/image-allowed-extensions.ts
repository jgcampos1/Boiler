import { InvalidFieldError } from '~/app/presentation/validation/errors'
import {
  FieldValidation,
  ValidationError
} from '~/app/presentation/validation/protocols'

const isValidImageExtension = (file: File, allowedTypes: string[]) => {
  if (!file?.type) return true

  if (allowedTypes.includes(file?.type)) return true
}

export class ImageAllowedExtensionsValidation implements FieldValidation {
  constructor(readonly field: string, readonly allowedExtensions: string[]) {}

  validate(input: FieldValidation.Params): ValidationError | undefined {
    return !isValidImageExtension(
      input[this.field] as unknown as File,
      this.allowedExtensions
    )
      ? new InvalidFieldError({
          name: 'exception:FILE_TYPE_NOT_ALLOWED'
        })
      : undefined
  }
}
