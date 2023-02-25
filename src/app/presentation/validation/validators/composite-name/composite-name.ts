import { InvalidFieldError } from '~/app/presentation/validation/errors'
import {
  FieldValidation,
  ValidationError
} from '~/app/presentation/validation/protocols'

export class CompositeNameValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(input: object): ValidationError | undefined {
    const compositeNameRegex = /(\s+[a-zA-Z]+){1}/

    const verifySpaceOneLetterAndSpace = /^\S+[a-zA-Z]+\S*/

    return !input[this.field] ||
      (verifySpaceOneLetterAndSpace.test(input[this.field]) &&
        compositeNameRegex.test(input[this.field]))
      ? undefined
      : new InvalidFieldError({
          name: 'exception:COMPOSITE_NAME'
        })
  }
}
