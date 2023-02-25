export const makeApiUrl = (path: string) =>
  `${process.env.PUBLIC_API_URL as string}/${path}`

export const makeApiUrlTenant = (path: string) =>
  `${process.env.PUBLIC_API_URL_TENANT as string}/${path}`
