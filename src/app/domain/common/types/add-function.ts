import { Response } from './response'

export interface AddFunction<T, R = unknown> {
  add: (params: R) => Promise<Response<T>>
}
