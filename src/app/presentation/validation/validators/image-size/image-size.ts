import { InvalidFieldError } from '~/app/presentation/validation/errors'
import {
  FieldValidation,
  ValidationError
} from '~/app/presentation/validation/protocols'

const validateImageSize = (file: File, maxSize: number) => {
  if (file?.size > maxSize * 1024 * 1024) return true
}

export class ImageSizeValidation implements FieldValidation {
  constructor(readonly field: string, readonly maxSize: number) {}

  validate(input: FieldValidation.Params): ValidationError | undefined {
    return validateImageSize(input[this.field] as unknown as File, this.maxSize)
      ? new InvalidFieldError({
          name: 'exception:FILE_SIZE_EXCEEDED'
        })
      : undefined
  }
}
