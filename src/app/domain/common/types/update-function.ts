import { Response } from './response'

export interface UpdateFunction<T, R = unknown> {
  update: (params: R) => Promise<Response<T>>
}
