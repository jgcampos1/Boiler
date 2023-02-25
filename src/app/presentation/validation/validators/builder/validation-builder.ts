import { FieldValidation } from '~/app/presentation/validation/protocols'
import {
  RequiredFieldValidation,
  EmailValidation,
  CompareFieldsValidation,
  MaxLengthValidation,
  PasswordStrengthValidation,
  URLValidation,
  CpfValidation,
  CnpjValidation,
  CompositeNameValidation,
  OneOrAnotherValidation,
  MinValueValidation,
  MaxValueValidation,
  MinLengthValidation,
  SpaceNotAllowedValidation,
  SpecialCharactersNotAllowedValidation,
  ImageSizeValidation,
  ImageAllowedExtensionsValidation,
  RequiredDependsOnValidation,
  IsNotEmptyValidation
} from '~/app/presentation/validation/validators'

export class ValidationBuilder {
  private constructor(
    private readonly fieldName: string,
    private readonly validations: FieldValidation[]
  ) {}

  static field(fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  required(): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  email(): ValidationBuilder {
    this.validations.push(new EmailValidation(this.fieldName))
    return this
  }

  minLength(length: number): ValidationBuilder {
    this.validations.push(new MinLengthValidation(this.fieldName, length))
    return this
  }

  maxLength(length: number): ValidationBuilder {
    this.validations.push(new MaxLengthValidation(this.fieldName, length))
    return this
  }

  minValue(value: number): ValidationBuilder {
    this.validations.push(new MinValueValidation(this.fieldName, value))
    return this
  }

  maxValue(value: number): ValidationBuilder {
    this.validations.push(new MaxValueValidation(this.fieldName, value))
    return this
  }

  requiredDependsOn(otherField: string, toEqualValue: any): ValidationBuilder {
    this.validations.push(
      new RequiredDependsOnValidation(this.fieldName, otherField, toEqualValue)
    )
    return this
  }

  sameAs(fieldToCompare: string, messageMismatch?: string): ValidationBuilder {
    this.validations.push(
      new CompareFieldsValidation(
        this.fieldName,
        fieldToCompare,
        messageMismatch
      )
    )
    return this
  }

  oneOrAnother(otherField: string): ValidationBuilder {
    this.validations.push(
      new OneOrAnotherValidation(this.fieldName, otherField)
    )
    return this
  }

  password(): ValidationBuilder {
    this.validations.push(new PasswordStrengthValidation(this.fieldName))
    return this
  }

  url(): ValidationBuilder {
    this.validations.push(new URLValidation(this.fieldName))
    return this
  }

  cpf(): ValidationBuilder {
    this.validations.push(new CpfValidation(this.fieldName))
    return this
  }

  cnpj(): ValidationBuilder {
    this.validations.push(new CnpjValidation(this.fieldName))
    return this
  }

  compositeName(): ValidationBuilder {
    this.validations.push(new CompositeNameValidation(this.fieldName))
    return this
  }

  spaceNotAllowed(): ValidationBuilder {
    this.validations.push(new SpaceNotAllowedValidation(this.fieldName))
    return this
  }

  specialCharactersNotAllowed(): ValidationBuilder {
    this.validations.push(
      new SpecialCharactersNotAllowedValidation(this.fieldName)
    )
    return this
  }

  imageSize(maxSize: number): ValidationBuilder {
    this.validations.push(new ImageSizeValidation(this.fieldName, maxSize))
    return this
  }

  imageAllowedExtensions(allowedExtensions: string[]): ValidationBuilder {
    this.validations.push(
      new ImageAllowedExtensionsValidation(this.fieldName, allowedExtensions)
    )
    return this
  }

  isNotEmpty(messageMismatch?: string): ValidationBuilder {
    this.validations.push(
      new IsNotEmptyValidation(this.fieldName, messageMismatch)
    )
    return this
  }

  build(): FieldValidation[] {
    return this.validations
  }
}
