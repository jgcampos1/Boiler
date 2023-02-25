import { InvalidFieldError } from '~/app/presentation/validation/errors'
import {
  FieldValidation,
  ValidationError
} from '~/app/presentation/validation/protocols'

export class CpfValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(input: object): ValidationError | undefined {
    const isValidCPF = (cpf) => {
      if (cpf === '') return false
      if (typeof cpf !== 'string') return false
      cpf = cpf?.replace(/[\s.-]*/gim, '')
      if (
        !cpf ||
        cpf.length !== 11 ||
        cpf === '00000000000' ||
        cpf === '11111111111' ||
        cpf === '22222222222' ||
        cpf === '33333333333' ||
        cpf === '44444444444' ||
        cpf === '55555555555' ||
        cpf === '66666666666' ||
        cpf === '77777777777' ||
        cpf === '88888888888' ||
        cpf === '99999999999'
      ) {
        return false
      }
      let sum = 0
      let rest
      for (let i = 1; i <= 9; i++)
        sum = sum + parseInt(cpf?.substring(i - 1, i)) * (11 - i)
      rest = (sum * 10) % 11
      if (rest === 10 || rest === 11) rest = 0
      if (rest !== parseInt(cpf?.substring(9, 10))) return false
      sum = 0
      for (let i = 1; i <= 10; i++)
        sum = sum + parseInt(cpf?.substring(i - 1, i)) * (12 - i)
      rest = (sum * 10) % 11
      if (rest === 10 || rest === 11) rest = 0
      if (rest !== parseInt(cpf?.substring(10, 11))) return false
      return true
    }

    return !input[this.field] || isValidCPF(input[this.field])
      ? undefined
      : new InvalidFieldError({
          name: 'exception:INVALID_CPF'
        })
  }
}
