import axios, { AxiosResponse } from 'axios'
import { injectable } from 'inversify'

import {
  HttpClient,
  HttpRequest,
  HttpResponse
} from '~/app/data/protocols/http'

@injectable()
export class AxiosHttpClient implements HttpClient {
  async request({
    method,
    url,
    body,
    headers
  }: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse<any>

    try {
      axiosResponse = await axios.request({
        url,
        data: body,
        headers,
        method
      })
    } catch (error: any) {
      axiosResponse = error.response
    }

    return {
      statusCode: axiosResponse?.status,
      body: axiosResponse?.data?.body
    }
  }
}
