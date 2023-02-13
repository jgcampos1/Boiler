import { Response } from './response'

export interface LoadFunction<T, R = unknown> {
  load: (params?: R) => Promise<Response<T>>
}
