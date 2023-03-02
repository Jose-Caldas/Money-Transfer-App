import { DatePicker } from "antd";
import Currency from "../Currency";
import Plans from "../Plans";
import { Container, ChoosePlan, Content } from "./styled";

import dayjs from "dayjs";

import { useStore } from "../context/store";

function Main() {
  const store = useStore((state) => state);

  const available = 22000;

  const balance = available - store.fromAmount;

  const message = balance < 0;

  return (
    <Container>
      <h1>Send Money</h1>
      <header>
        <h2>{balance}</h2>
        {message ? <p>Insufficient funds</p> : <p>Available</p>}
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
              const isoFormat = dayjs(value?.toJSON()).format("DD/MM/YYYY");
              store.changeDate(isoFormat);
            }}
          />
        </div>
      </ChoosePlan>

      <Plans
        date={store.date}
        planType="Express"
        price={1.15}
        id="express"
        value="express"
        htmlFor="express"
      />
      <Plans
        date={store.date}
        planType="Standard"
        price={0.79}
        id="standard"
        value="standard"
        htmlFor="standard"
      />
      <Plans
        date={store.date}
        planType="Economic"
        price={0.59}
        id="economic"
        value="economic"
        htmlFor="economic"
      />
    </Container>
  );
}

export default Main;
