import { UpdateFunction } from '~/app/domain/common/types'

export interface RefreshUserToken
  extends UpdateFunction<RefreshUserToken.Model, RefreshUserToken.Params> {}

export namespace RefreshUserToken {
  export type Model = {
    updated: boolean
    accessToken: string
  }

  export type Params = {
    accessToken: string
    refreshToken: string
  }
}
