export const formatCurrency = (price: number, currency: string) =>
  Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(price);
