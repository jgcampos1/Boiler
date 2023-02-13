export class FormError extends Error {
  constructor(errors: any) {
    super('FormError')
    this.name = 'FormError'
    this.message =
      typeof errors === 'string' ? errors : JSON.stringify(errors ?? '')
  }
}
