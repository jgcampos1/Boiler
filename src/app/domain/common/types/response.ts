import { Either } from '~/app/domain/common/utils/either/either'
import {
  AccessDeniedError,
  FormError,
  InvalidCredentialsError,
  UnexpectedError
} from '../exceptions'

export type ResponseError =
  | AccessDeniedError
  | InvalidCredentialsError
  | UnexpectedError
  | FormError

export type Response<R = unknown> = Either<ResponseError, R>
