import axios from "axios";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { Currency } from "../../utils/types";

export interface CurrenciesContextData {
  currencies: Currency[];
  setCurrencies: Dispatch<SetStateAction<Currency[]>>;
}

export const CurrenciesContextDefaultValue: CurrenciesContextData = {
  currencies: [],
  setCurrencies: () => {},
};
export const CurrencyContext = createContext<CurrenciesContextData>(
  CurrenciesContextDefaultValue
);

export type CurrenciesProviderProps = {
  children: ReactNode;
};

const API_BASE_URL =
  "https://run.mocky.io/v3/87a9b305-789c-4fa8-8b1f-f38ecfbf8534";

const CurrencyProvider = ({ children }: CurrenciesProviderProps) => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  const fetchCurrencies = async () => {
    const res = await axios.get(API_BASE_URL);
    const { currencies } = await res.data;
    setCurrencies(currencies);
    console.log(currencies);
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    <CurrencyContext.Provider value={{ currencies, setCurrencies }}>
      {children}
    </CurrencyContext.Provider>
  );
};

const UseCurrencies = () => useContext(CurrencyContext);
export { CurrencyProvider, UseCurrencies };
