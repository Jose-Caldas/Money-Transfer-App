import { DatePicker } from "antd";
import React from "react";
import Currency from "../Currency";
import Plans from "../Plans";
import { Container, ChoosePlan, Content } from "./styled";

function Main() {
  return (
    <Container>
      <h1>Send Money</h1>
      <header>
        <h2>22,124</h2>
        <h3>available</h3>
      </header>
      <Content>
        <Currency />
      </Content>

      <ChoosePlan>
        <h1>Choose a plan:</h1>
        <div className="date">
          <h4>Choose the date:</h4>
          <DatePicker onChange={console.log} />
        </div>
      </ChoosePlan>

      <Plans
        title="Get 27 July 2020 till 12pm"
        text="Express"
        number="$ 0.99"
      />
      <Plans
        title="Get 27 July 2020 till 6pm"
        text="Standard"
        number="$ 1.00"
      />
      <Plans
        title="Get today till 8pm"
        text="Only on working days from 11am to 8pm"
        number="$ 1.00"
      />
    </Container>
  );
}

export default Main;
