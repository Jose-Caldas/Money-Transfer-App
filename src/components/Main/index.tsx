import { DatePicker } from "antd";
import Currency from "../Currency";
import Plans from "../Plans";
import { Container, ChoosePlan, Content } from "./styled";
import { convert } from "cashify";
import { useEffect } from "react";

import create from "zustand";

export const rates = {
  CAD: 1.4824,
  HKD: 9.2493,
  ISK: 151.6,
  PHP: 57.997,
  DKK: 7.436,
  HUF: 368.18,
  CZK: 26.17,
  AUD: 1.5347,
  RON: 4.8858,
  SEK: 10.157,
  IDR: 17165.19,
  INR: 86.6105,
  BRL: 6.6225,
  RUB: 88.1313,
  HRK: 7.575,
  JPY: 130.08,
  THB: 36.772,
  CHF: 1.1069,
  SGD: 1.6013,
  PLN: 4.6253,
  BGN: 1.9558,
  TRY: 8.7701,
  CNY: 7.7507,
  NOK: 10.1058,
  NZD: 1.6567,
  ZAR: 17.6202,
  USD: 1.1912,
  MXN: 24.5306,
  ILS: 3.929,
  GBP: 0.85575,
  KRW: 1343.25,
  MYR: 4.8976,
};

interface StoreState {
  from: string;
  to: string;
  fromAmount: number;
  setFromAmount: (value: number) => void;
  toAmount: number;
  setToAmount: (value: number) => void;
  plan: string;
  changePlan: (plan: string) => void;
  date: string;
  changeDate: (date: string) => void;
  bankTransaction: number;
}

export const useStore = create<StoreState>((set) => ({
  fromAmount: 0,
  setFromAmount: (value) => set(() => ({ fromAmount: Number(value) })),
  toAmount: 0,
  from: "EUR",
  to: "CAD",
  setToAmount: (value) => set(() => ({ toAmount: Number(value) })),
  plan: "Express",
  changePlan: (plan: string) => set(() => ({ plan })),
  date: "27 July 2020",
  changeDate: (date: string) => set(() => ({ date })),
  bankTransaction: 1.99,
}));

function Main() {
  const store = useStore((state) => state);
  const plan = useStore((state) => state.plan);
  const date = useStore((state) => state.date);
  const changeDate = useStore((state) => state.changeDate);
  const bankTransaction = useStore((state) => state.bankTransaction);

  const from = "EUR";
  const to = "CAD";

  const result = convert(store.fromAmount, {
    from,
    to,
    base: "EUR",
    rates,
  });

  useEffect(() => {
    store.setToAmount(Number(result.toFixed(2)));

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  console.log(result);

  const dateFormat = "dd/MM/yyyy";

  return (
    <Container>
      <h1>Send Money</h1>
      <header>
        <h2>{store.fromAmount}</h2>
        <h3>available</h3>
      </header>
      <Content>
        <Currency />
      </Content>

      <ChoosePlan>
        <h1>Choose a plan:</h1>
        <div className="date">
          <h4>Choose the date:</h4>
          <DatePicker
            onChange={(value) => {
              const isoDate = value?.toISOString() || "";
              changeDate(isoDate);
            }}
            bordered={false}
            format={dateFormat}
          />
        </div>
      </ChoosePlan>

      <Plans title={date} text={plan} price={bankTransaction} />
      <Plans title={date} text={plan} price={0.99} />
      <Plans title={date} text={plan} price={0.59} />
    </Container>
  );
}

export default Main;
