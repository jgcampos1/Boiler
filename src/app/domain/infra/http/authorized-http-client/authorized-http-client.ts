import { inject, injectable } from 'inversify'
import { ConstantTypes, InfraTypes, ApiTypes } from '~/ioc/types'
import { Response } from '~/app/domain/common/types'
import { error, success } from '~/app/domain/common/utils'
import { UserModel } from '~/app/domain/models'
import { RefreshUserToken } from '~/app/domain/use-cases/auth'
import { RequestResponse } from '~/app/data/common/helpers'
import type { CacheStorage } from '~/app/data/protocols/cache-storage'
import type { TokenDecoder } from '~/app/data/protocols/decoder'
import {
  HttpClient,
  HttpMethod,
  HttpRequest,
  HttpResponse
} from '~/app/data/protocols/http'

@injectable()
export class AuthorizedHttpClient implements HttpClient {
  private readonly whiteListUrl = [
    '/auth/sign-in',
    '/auth/logout',
    '/auth/refresh-token',
    '/auth/forgot-password'
  ]

  constructor(
    @inject(ApiTypes.AUTH.REFRESH_USER_TOKEN)
    private readonly url: string,
    @inject(ConstantTypes.AUTH.REFRESH_TOKEN_KEY)
    private readonly refreshTokenKey: string,
    @inject(InfraTypes.HTTP_CLIENT)
    private readonly httpClient: HttpClient,
    @inject(InfraTypes.CACHE_STORAGE)
    private readonly cacheStorage: CacheStorage,
    @inject(ConstantTypes.AUTH.TOKEN_KEY)
    private readonly tokenKey: string,

    @inject(InfraTypes.TOKEN_DECODER)
    private readonly tokenDecoder: TokenDecoder
  ) {}

  async request(data: HttpRequest): Promise<HttpResponse> {
    const token = this.cacheStorage.get<string>(this.tokenKey)

    this.tokenDecoder.decode<{
      user: UserModel
      exp: number
    }>(token)

    if (token) {
      Object.assign(data, {
        headers: Object.assign(data.headers || {}, {
          Authorization: `Bearer ${token}`
        })
      })
    }

    const httpResponse = await this.httpClient.request(data)
    if (
      httpResponse.statusCode === 401 &&
      !this.whiteListUrl.find((url) => data.url.includes(url))
    ) {
      const accessToken = this.cacheStorage.get<string>(this.tokenKey)
      const refreshToken = this.cacheStorage.get<string>(this.refreshTokenKey)

      const tokenOrError = await this.getRefreshToken({
        refreshToken,
        accessToken
      })

      if (tokenOrError.isError()) {
        this.cacheStorage.set(this.refreshTokenKey)
        this.cacheStorage.set(this.tokenKey)
        window.location.href = `${process.env.PUBLIC_TENANT_URL_LOGIN}?revokeAccess=true`
        return httpResponse
      }

      this.cacheStorage.set(this.tokenKey, tokenOrError.value.accessToken)
      return this.request(
        this.addNewTokenToHeaders(tokenOrError.value.accessToken, data)
      )
    }
    return httpResponse
  }

  async getRefreshToken(
    params: RefreshUserToken.Params
  ): Promise<Response<RefreshUserToken.Model>> {
    const httpResponse = await this.request({
      method: HttpMethod.POST,
      url: this.url,
      body: {
        refreshToken: params.refreshToken
      }
    })

    const responseOrError = RequestResponse.handle(httpResponse)

    if (responseOrError.isError()) {
      return error(responseOrError.value)
    }

    return success({
      accessToken: responseOrError.value.response.accessToken,
      updated: true
    })
  }

  private addNewTokenToHeaders(
    newAccessToken: string,
    request: HttpRequest
  ): HttpRequest {
    return Object.assign(request, {
      headers: Object.assign(request.headers || {}, {
        Authorization: `Bearer ${newAccessToken}`
      })
    })
  }
}
