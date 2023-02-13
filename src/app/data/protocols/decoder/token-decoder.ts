export interface TokenDecoder {
  decode: <T>(token: string) => T
}
