import { MaskOptionsEnum } from '../enums'

export type MaskOptions =
  | MaskOptionsEnum.CVV
  | MaskOptionsEnum.EXPIRATION
  | MaskOptionsEnum.CARD_NUMBER
  | MaskOptionsEnum.CEP
  | MaskOptionsEnum.PHONE_NUMBER
  | MaskOptionsEnum.CPF
  | MaskOptionsEnum.CNPJ
  | MaskOptionsEnum.AMOUNT
