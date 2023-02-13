import { UserModel } from './'

export type TokenModel = {
  accessToken: string
  expiresIn: number | null
  refreshToken: string
  refreshTokenExpiresIn: number | null
  user: UserModel | null
}
