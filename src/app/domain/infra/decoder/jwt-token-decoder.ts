import { injectable } from 'inversify'
import jwtDecode from 'jwt-decode'

import type { TokenDecoder } from '~/app/data/protocols/decoder'

@injectable()
export class JWTTokenDecoder implements TokenDecoder {
  decode<T>(token: string): T {
    const decodedToken = jwtDecode<T>(token)
    return decodedToken
  }
}
