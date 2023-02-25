export interface PhoneFormatter {
  format: (countryCode: string, phoneNumber: string) => string
}
