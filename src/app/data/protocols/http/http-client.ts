export interface HttpClient<R = any, T = any> {
  request: (params: HttpRequest<T>) => Promise<HttpResponse<R>>
}

export type HttpRequest<T = any> = {
  body?: T
  headers?: Record<string, string>
  queryParams?: Record<string, string>
  method: HttpMethod
  url: string
}

export type HttpResponse<T = any> = HttpSuccess<T> | HttpError

export type HttpSuccess<T = any> = {
  body: T
  error?: never
  message?: never
  statusCode: HttpStatusCode
}

export type HttpError = {
  body: never
  error?: any
  message: string
  statusCode: HttpStatusCode
}

export enum HttpMethod {
  DELETE = 'DELETE',
  GET = 'GET',
  PATCH = 'PATCH',
  POST = 'POST',
  PUT = 'PUT'
}

export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  UNPROCESSABLE_ENTITY = 422,
  SERVER_ERROR = 500
}
