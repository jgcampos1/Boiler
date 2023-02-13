import { Response } from './response'

export interface DeleteFunction<T, R = any> {
  delete: (params: R) => Promise<Response<T>>
}
