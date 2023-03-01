export const formatNumber = (value: number | bigint) => {
  const currency = Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "USD",
  }).format(value);
  return currency;
};
