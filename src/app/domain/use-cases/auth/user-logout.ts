import { Response } from '~/app/domain/common/types'

export interface UserLogout {
  logout: () => Promise<Response<void>>
}
