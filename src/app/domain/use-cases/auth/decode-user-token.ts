import { TokenModel } from '~/app/domain/models'

export interface DecodeUserToken {
  decode: (token: string) => TokenModel
}
