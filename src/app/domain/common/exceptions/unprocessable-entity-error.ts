export class UnprocessableEntityError extends Error {
  constructor(message?: string) {
    super('UnprocessableEntity')
    this.name = UnprocessableEntityError.name
    this.message = message ?? 'exception:UNPROCESSABLE_ENTITY'
  }
}
