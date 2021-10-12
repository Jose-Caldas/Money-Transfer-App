import dayjs from "dayjs";
import create from "zustand";
import symbolsMock from "../../mocks/symbols.json";
const symbols = symbolsMock;
console.log(symbols);

const dateFormat = dayjs(new Date()).format("DD/MM/YYYY");

interface StoreState {
  from: string;
  setFrom: (from: string) => void;
  to: string;
  setTo: (to: string) => void;
  fromAmount: number;
  setFromAmount: (value: number) => void;
  toAmount: number;
  setToAmount: (value: number) => void;
  plan: string;
  changePlan: (plan: string) => void;
  date: string;
  changeDate: (date: string) => void;
  conversionRate: number;
  changeConversionRate: (value: number) => void;
  base: string;
  setBase: (abbreviation: string) => void;
  symbol: string;
  setSymbol: (value: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  fromAmount: 0,
  setFromAmount: (value) => set(() => ({ fromAmount: Number(value) })),
  toAmount: 0,
  setToAmount: (value) => set(() => ({ toAmount: Number(value) })),
  from: "EUR",
  setFrom: (value) => set(() => ({ from: String(value) })),
  to: "CAD",
  setTo: (value) => set(() => ({ to: String(value) })),
  plan: "",
  changePlan: (plan: string) => set(() => ({ plan })),
  date: dateFormat,
  changeDate: (date: string) => set(() => ({ date })),
  conversionRate: 0.0,
  changeConversionRate: (value) =>
    set(() => ({ conversionRate: Number(value) })),
  base: "EUR",
  setBase: (value) => set(() => ({ base: String(value) })),
  symbol: "",
  setSymbol: (value) => set(() => ({ symbol: String(value) })),
}));
