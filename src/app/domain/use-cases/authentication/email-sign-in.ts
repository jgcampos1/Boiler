import { Response } from '~/app/domain/common/types'
import { TokenModel } from '~/app/domain/models'

export interface EmailSignIn {
  auth: (params: EmailSignIn.Params) => Promise<Response<TokenModel>>
}

export namespace EmailSignIn {
  export type Params = {
    email: string
    password: string
  }
}
