import create from "zustand";

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
  date: "27 July 2020",
  changeDate: (date: string) => set(() => ({ date })),
  conversionRate: 0.0,
  changeConversionRate: (value) =>
    set(() => ({ conversionRate: Number(value) })),
  base: "EUR",
  setBase: (value) => set(() => ({ base: String(value) })),
}));