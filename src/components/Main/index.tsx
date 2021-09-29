import { DatePicker } from "antd";
import Currency from "../Currency";
import Plans from "../Plans";
import { Container, ChoosePlan, Content } from "./styled";
import { convert } from "cashify";
import { useEffect } from "react";

import { useStore } from "../context/store";
// import { UseCurrencies } from "../context/useCurrencies";

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

function Main() {
  // const { currencies } = UseCurrencies();
  const store = useStore((state) => state);

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

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
              const isoFormat = value.toJSON() || "";
              store.changeDate(isoFormat);
            }}
            bordered={false}
            format={dateFormat}
          />
        </div>
      </ChoosePlan>

      <Plans date={store.date} text="Express" price={1.99} />
      <Plans date={store.date} text="Standard" price={0.99} />
      <Plans date={store.date} text="Economic" price={0.59} />
    </Container>
  );
}

export default Main;
