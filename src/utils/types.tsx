export type Currency = {
  label: string;
  id: string;
  value: string;
  flag: string;
};

export interface CurrencyProps {
  currencies: Currency[];
}
