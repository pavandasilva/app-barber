export const formatFloatToCurrency = (float: number) => {
  const format = { minimumFractionDigits: 2, maximumFractionDigits: 2, currency: 'BRL' }
  return float.toLocaleString('pt-BR', format)
}
