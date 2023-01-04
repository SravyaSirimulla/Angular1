export interface Quote {
  id: string,
  quoteId: string,
  accountNumber: string,
  customerNumber: string,
  accountName: string,
  customerName: string,
  products: string[],
  billToAddress: string,
  soldToAddress: string,
  shipToAddress: string,
  installAtAddress: string
}
