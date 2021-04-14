import React, { useEffect, useState } from "react";
import { Container } from "./styled";

import { FiRefreshCcw } from "react-icons/fi";
import { Select } from "antd";

// import currenciesMock from "../../mocks/currencies.json";

const { Option } = Select;

function Currency() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/juliomerisio/currency-json-server/currencies"
    )
      .then((response) => response.json())
      .then((data) => setCurrencies(data));
  }, []);

  return (
    <Container>
      <div className="currency-select">
        <div className="select">
          <Select>
            {currencies.map((currencies) => (
              <Option
                style={{
                  fontSize: 15,
                }}
                value={currencies.value}
                id={currencies.id}
              >
                From:
                <img
                  src={currencies.flag}
                  alt=""
                  srcset=""
                  style={{ width: 30, height: 30 }}
                />
                {currencies.label}
              </Option>
            ))}
          </Select>
          <div class="transfer">
            <small>You send</small>
            <input type="number"></input>
          </div>
        </div>
        <button className="refresh">
          <FiRefreshCcw />
        </button>
        <div className="select">
          <Select>
            {currencies.map((currencies) => (
              <Option
                style={{
                  fontSize: 15,
                }}
                value={currencies.value}
                id={currencies.id}
              >
                To:
                <img
                  src={currencies.flag}
                  alt=""
                  srcset=""
                  style={{ width: 30, height: 30 }}
                />
                {currencies.label}
              </Option>
            ))}
          </Select>
          <div class="transfer">
            <small>Recipient gets</small>
            <input type="number"></input>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Currency;
