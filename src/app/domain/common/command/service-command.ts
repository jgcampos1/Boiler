import { type Either } from '~/app/domain/common/utils/either/either'
import { type DomainException } from '~/app/domain/common/exceptions/'

export interface ServiceCommand<R = any, T = any> {
  execute: (params: T) => Promise<ServiceCommand.Response<R>>
}

export namespace ServiceCommand {
  export type Response<R = any> = Either<ResponseError, R>
  export type ResponseError<E = DomainException> = E
}
