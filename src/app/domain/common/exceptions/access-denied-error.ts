import { type DomainException } from './domain-exception'

export class AccessDeniedError implements DomainException {
  type = 'AccessDeniedError'
  message = 'Access denied'

  // eslint-disable-next-line n/handle-callback-err
  constructor(public error?: any) {}
}
