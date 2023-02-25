import { InvalidFieldError } from '~/app/presentation/validation/errors'
import {
  FieldValidation,
  ValidationError
} from '~/app/presentation/validation/protocols'

export class CnpjValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(input: object): ValidationError | undefined {
    const validaCNPJ = (cnpj) => {
      cnpj = cnpj.replace(/[^\d]+/g, '')

      if (cnpj === '') return false

      if (cnpj.length !== 14) return false

      // Elimina CNPJs invalidos conhecidos
      if (
        cnpj === '00000000000000' ||
        cnpj === '11111111111111' ||
        cnpj === '22222222222222' ||
        cnpj === '33333333333333' ||
        cnpj === '44444444444444' ||
        cnpj === '55555555555555' ||
        cnpj === '66666666666666' ||
        cnpj === '77777777777777' ||
        cnpj === '88888888888888' ||
        cnpj === '99999999999999'
      )
        return false

      if (!cnpj) return false

      const isString = typeof cnpj === 'string'
      const validTypes =
        isString || Number.isInteger(cnpj) || Array.isArray(cnpj)

      if (!validTypes) return false

      if (isString) {
        if (cnpj.length > 18) return false

        const digitsOnly = /^\d{14}$/.test(cnpj)

        if (!digitsOnly) return false
      }

      const match = cnpj.toString().match(/\d/g)
      const numbers = Array.isArray(match) ? match.map(Number) : []

      if (numbers.length !== 14) return false

      const items = [...new Set(numbers)]
      if (items.length === 1) return false

      const calc = (x) => {
        const slice = numbers.slice(0, x)
        let factor = x - 7
        let sum = 0

        for (let i = x; i >= 1; i--) {
          const n = slice[x - i]
          sum += n * factor--
          if (factor < 2) factor = 9
        }

        const result = 11 - (sum % 11)

        return result > 9 ? 0 : result
      }

      const digits = numbers.slice(12)

      const digit0 = calc(12)
      if (digit0 !== digits[0]) return false

      const digit1 = calc(13)
      return digit1 === digits[1]
    }

    return !input[this.field] || validaCNPJ(input[this.field])
      ? undefined
      : new InvalidFieldError({
          name: 'exception:INVALID_CNPJ'
        })
  }
}
