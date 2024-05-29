export const dateFormmatter = new Intl.DateTimeFormat('pt-BR')

export const priceFormatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
