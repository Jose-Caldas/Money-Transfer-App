import React from "react";
import { Container } from "./styles";
// import image from "../../assets/brasil.png";
// import { FiRefreshCcw } from "react-icons/fi";
import { DatePicker } from "antd";
import Currency from "../currency/currency";
import { CurrancyContainer } from "../currency/styled";
import Plans from "../plans/Plans";
import image from "../../assets/avatar.png";

function Main() {
  return (
    <Container>
      <header>
        <div className="profile">
          <img src={image} alt="" srcset="" />
          <div className="info">
            <strong>José Caldas</strong>
            <small>2312T45B</small>
          </div>
        </div>
        <h1>Send Money</h1>
        <div class="header-content">
          <h2>22,124</h2>
          <span>available</span>
        </div>
      </header>
      <CurrancyContainer>
        <Currency />
      </CurrancyContainer>

      <div className="choose">
        <h1>Choose a plan:</h1>
        <div>
          <h4>Choose the date:</h4>
          <DatePicker onChange={console.log} />
        </div>
      </div>
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
