import { InvalidFieldError } from '~/app/presentation/validation/errors'
import {
  FieldValidation,
  ValidationError
} from '~/app/presentation/validation/protocols'

const validateHasSpecialCharacters = (input: string) => {
  const regexp = /[!@#$%^&*()+=[\]{};ºª`´~':"\\|,.<>/?]+/

  return regexp.test(input)
}
export class SpecialCharactersNotAllowedValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(input: FieldValidation.Params): ValidationError | undefined {
    return validateHasSpecialCharacters(input[this.field])
      ? new InvalidFieldError({
          name: 'exception:SPECIAL_CHARACTERS_NOT_ALLOWED'
        })
      : undefined
  }
}
