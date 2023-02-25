import { InvalidFieldError } from '~/app/presentation/validation/errors'
import {
  FieldValidation,
  ValidationError
} from '~/app/presentation/validation/protocols'

const validateCharacter = (input: string) => {
  const regexp = /^\S*$/

  return regexp.test(input)
}
export class SpaceNotAllowedValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(input: FieldValidation.Params): ValidationError | undefined {
    return !validateCharacter(input[this.field])
      ? new InvalidFieldError({
          name: 'exception:SPACE_NOT_ALLOWED'
        })
      : undefined
  }
}
