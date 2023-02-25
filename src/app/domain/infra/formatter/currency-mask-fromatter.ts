type CurrencyMaskFormatterProps = {
  value: string
  formatBasedOnSymbol: string
  shouldShowSymbol?: boolean
}

enum CurrencyMapEnum {
  'R$' = 'R$',
  '$' = '$'
}

export const currencyMaskFormatter = ({
  value = '',
  formatBasedOnSymbol,
  shouldShowSymbol
}: CurrencyMaskFormatterProps) => {
  const formatBasedOnSymbolToCountryMap = {
    [CurrencyMapEnum.R$]: 'pt-BR',
    [CurrencyMapEnum.$]: 'en'
  }

  value = value.replace('.', '').replace(',', '').replace(/\D/g, '')
  if (!value) {
    return shouldShowSymbol ? '$ 0.00' : '0.00'
  }

  const result = new Intl.NumberFormat(
    formatBasedOnSymbolToCountryMap?.[formatBasedOnSymbol] ?? 'en',
    { minimumFractionDigits: 2 }
  ).format(parseFloat(value) / 100)

  if (!value) return ''

  return shouldShowSymbol
    ? `${formatBasedOnSymbol} ${result}` ?? `$ ${result}`
    : result
}
