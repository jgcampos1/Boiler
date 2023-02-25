import { inject, injectable } from 'inversify'
import { InfraTypes } from '~/ioc/types'

import { TokenModel, UserModel } from '~/app/domain/models'
import { DecodeUserToken } from '~/app/domain/use-cases/auth'

import type { TokenDecoder } from '~/app/data/protocols/decoder'

@injectable()
export class LocalDecodeUserToken implements DecodeUserToken {
  constructor(
    @inject(InfraTypes.TOKEN_DECODER)
    private readonly tokenDecoder: TokenDecoder
  ) {}

  decode(token: string): TokenModel {
    if (!token) {
      throw new Error('Token not provided.')
    }
    const { exp, user } = this.tokenDecoder.decode<{
      user: UserModel
      exp: number
    }>(token)
    return {
      accessToken: token,
      expiresIn: exp,
      refreshToken: token,
      refreshTokenExpiresIn: exp,
      user: user
    }
  }
}
