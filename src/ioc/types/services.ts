export const ServicesTypes = {
  AUTH: {
    USER_LOGOUT: Symbol('UserLogout'),
    DECODE_USER_TOKEN: Symbol('DecodeUserToken'),
    REFRESH_USER_TOKEN: Symbol('RefreshUserToken')
  }
}
