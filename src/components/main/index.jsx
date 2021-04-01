import React from "react";
import { Container, CurrancyContainer } from "./styles";
// import image from "../../assets/brasil.png";
// import { FiRefreshCcw } from "react-icons/fi";
import { DatePicker } from "antd";
import { RiCheckboxCircleLine } from "react-icons/ri";
import Currency from "./currency";

function Main() {
  return (
    <Container>
      <header>
        <h1>Send Money</h1>
        <div class="content">
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
          <h2>Choose the date:</h2>
          <DatePicker onChange={console.log} />
        </div>
      </div>
      <div className="options">
        <div>
          <input type="radio" id="radio1" name="input-radio" />
          <label for="radio1">
            <div class="opt">
              <div>
                <RiCheckboxCircleLine />
                <div>
                  <h2>Get 27 July 2020 till 12pm</h2>
                  <small>Express</small>
                </div>
              </div>
              <div>
                <span>$ 0.99</span>
              </div>
            </div>
          </label>
        </div>
        <div>
          <input type="radio" id="radio2" name="input-radio" />
          <label for="radio2">
            <div class="opt">
              <div>
                <RiCheckboxCircleLine />
                <div>
                  <h2>Get 27 July 2020 till 6pm</h2>
                  <small>Standard</small>
                </div>
              </div>
              <div>
                <span>$ 1.00</span>
              </div>
            </div>
          </label>
        </div>
        <div>
          <input type="radio" id="radio3" name="input-radio" />
          <label for="radio3">
            <div class="opt">
              <div>
                <RiCheckboxCircleLine />
                <div>
                  <h2>Get today till 8pm</h2>
                  <small>Only on working days from 11am to 8pm</small>
                </div>
              </div>
              <div>
                <span>$ 1.00</span>
              </div>
            </div>
          </label>
        </div>
      </div>
    </Container>
  );
}

export default Main;
