import { DatePicker } from "antd";
import Currency from "../Currency";
import Plans from "../Plans";
import { Container, ChoosePlan, Content } from "./styled";
import { convert } from "cashify";
import { useEffect } from "react";
import { rates } from "../../mocks/rates";
import dayjs from "dayjs";

import { useStore } from "../context/store";

function Main() {
  const store = useStore((state) => state);

  const from = store.from;
  const to = store.to;

  const result = convert(store.fromAmount, {
    from,
    to,
    base: store.base,
    rates,
  });

  useEffect(() => {
    store.setToAmount(Number(result.toFixed(2)));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  return (
    <Container>
      <h1>Send Money</h1>
      <header>
        <h2>$ 22,124</h2>
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
              const isoFormat = dayjs(value.toJSON()).format("DD/MM/YYYY");
              store.changeDate(isoFormat);
            }}
          />
        </div>
      </ChoosePlan>

      <Plans date={store.date} text="Express" price={1.15} />
      <Plans date={store.date} text="Standard" price={0.79} />
      <Plans date={store.date} text="Economic" price={0.59} />
    </Container>
  );
}

export default Main;
