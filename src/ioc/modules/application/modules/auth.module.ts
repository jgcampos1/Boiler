import { ContainerModule } from 'inversify'
import { ServicesTypes } from '~/ioc/types'

import { DecodeUserToken, UserLogout } from '~/app/domain/use-cases/auth'

import {
  LocalDecodeUserToken,
  RemoteUserLogout
} from '~/app/data/repository/auth'

export const AuthModule = new ContainerModule((bind) => {
  bind<DecodeUserToken>(ServicesTypes.AUTH.DECODE_USER_TOKEN).to(
    LocalDecodeUserToken
  )
  bind<UserLogout>(ServicesTypes.AUTH.USER_LOGOUT).to(RemoteUserLogout)
})
