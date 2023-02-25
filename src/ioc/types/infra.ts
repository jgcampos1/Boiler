export const InfraTypes = {
  HTTP_CLIENT: Symbol('HttpClient'),
  AUTHORIZE_HTTP_CLIENT: Symbol('AuthorizeHttpClient'),
  TOKEN_DECODER: Symbol('TokenDecoder'),
  CACHE_STORAGE: Symbol('CacheStorage'),
  REFRESH_TOKEN_INTERCEPTOR: Symbol('RefreshTokenInterceptor'),
  ADAPTERS: {
    CARD_BRAND_CHECKER: Symbol('CardBrandChecker')
  },
  FORMATTERS: {
    CVV_MASK_FORMATTER: Symbol('CVVMaskFormatter'),
    CARDNUMBER_MASK_FORMATTER: Symbol('CardnumberMaskFormatter'),
    CEP_MASK_FORMATTER: Symbol('CepMaskFormatter'),
    PHONENUMBER_MASK_FORMATTER: Symbol('PhoneNumberMaskFormatter'),
    CPF_MASK_FORMATTER: Symbol('CpfMaskFormatter'),
    CNPJ_MASK_FORMATTER: Symbol('CnpjMaskFormatter'),
    AMOUNT_MASK_FORMATTER: Symbol('AmountMaskFormatter')
  }
}
