import { inject, injectable } from 'inversify'
import { ApiTypes, InfraTypes } from '~/ioc/types'

import { Response } from '~/app/domain/common/types'
import { error, success } from '~/app/domain/common/utils'
import { UserLogout } from '~/app/domain/use-cases/auth'

import { RequestResponse } from '~/app/data/common/helpers'
import { HttpClient, HttpMethod } from '~/app/data/protocols/http'

@injectable()
export class RemoteUserLogout implements UserLogout {
  constructor(
    @inject(ApiTypes.AUTH.USER_LOGOUT) private readonly url: string,
    @inject(InfraTypes.AUTHORIZE_HTTP_CLIENT)
    private readonly httpClient: HttpClient
  ) {}

  async logout(): Promise<Response<void>> {
    const httpResponse = await this.httpClient.request({
      method: HttpMethod.POST,
      url: this.url
    })

    const responseOrError = RequestResponse.handle(httpResponse)

    if (responseOrError.isError()) {
      return error(responseOrError.value)
    }

    return success(undefined)
  }
}
