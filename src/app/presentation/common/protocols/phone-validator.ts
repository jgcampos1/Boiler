export interface PhoneValidator {
  validate: (phoneNumber: string, countryCode: string) => boolean
}
