import { type LoginModel } from '~/app/domain/models/login-model'
import type { CacheStorage } from '~/app/data/protocols/cache-storage'
import { HttpMethod, HttpClient } from '~/app/data/protocols/http'
import { RequestResponse } from '~/app/data/common/helpers'
import { type ServiceCommand } from 'app/domain/common/command'
import { error, success } from '~/app/domain/common/utils'
import { EmailSignIn } from '~/app/domain/use-cases/authentication/email-sign-in'

export class RemoteEmailSignIn implements ServiceCommand<EmailSignIn> {
  constructor(
    private readonly httpClient: HttpClient<EmailSignIn>,
    private readonly cacheStorage: CacheStorage,
    private readonly tokenKey: string,
    private readonly url: string
  ) {}

  async execute(
    params: EmailSignIn
  ): Promise<ServiceCommand.Response<EmailSignIn>> {
    const httpResponse = await this.httpClient.request({
      method: HttpMethod.POST,
      url: this.url,
      body: params
    })

    const responseOrError = RequestResponse.handle(httpResponse)

    if (responseOrError.isError()) {
      return error(responseOrError.value)
    }

    const response = responseOrError.value.response

    this.cacheStorage.set(this.tokenKey, response)

    return success(response)
  }
}
