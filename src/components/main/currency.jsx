import React, { useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";

import { SelectContainer } from "./styles";
import { Select } from "antd";

import currenciesMock from "../../mocks/currencies.json";

const { Option } = Select;

function Currency() {
  const [currencies, setCurrencies] = useState(currenciesMock.currencies);
  console.log(currencies);
  return (
    <>
      <SelectContainer>
        <div>
          <div></div>
          <div></div>
        </div>

        <div className="transfer">
          <div className="select">
            <Select>
              {currencies.map((currencies) => (
                <Option value={currencies.value} id={currencies.id}>
                  From:
                  <img src={currencies.flag} alt="" srcset="" />
                  {currencies.label}
                </Option>
              ))}
            </Select>
            <div class="transfer-content">
              <small>You send</small>
              <input type="number"></input>
            </div>
          </div>
          <div>
            <button>
              <FiRefreshCcw />
            </button>
          </div>
          <div className="select">
            <Select>
              {currencies.map((currencies) => (
                <Option value={currencies.value} id={currencies.id}>
                  To:
                  <img src={currencies.flag} alt="" srcset="" />
                  {currencies.label}
                </Option>
              ))}
            </Select>
            <div class="transfer-content">
              <small>Recipient gets</small>
              <input type="number"></input>
            </div>
          </div>
        </div>
      </SelectContainer>
    </>
  );
}

export default Currency;
