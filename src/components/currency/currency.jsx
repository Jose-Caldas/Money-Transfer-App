import React, { useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";

import "antd/dist/antd.css";
import { ConfigProvider } from "antd";
import ptBR from "antd/lib/locale/pt_BR";

import { Select } from "antd";

import currenciesMock from "../../mocks/currencies.json";
import { SelectContainer } from "./styled";

const { Option } = Select;

function Currency() {
  const [currencies, setCurrencies] = useState(currenciesMock.currencies);
  console.log(currencies);
  return (
    <ConfigProvider locale={ptBR}>
      <SelectContainer>
        <div>
          <div></div>
          <div></div>
        </div>

        <div className="transfer">
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
            <div class="transfer-content">
              <small>Recipient gets</small>
              <input type="number"></input>
            </div>
          </div>
        </div>
      </SelectContainer>
    </ConfigProvider>
  );
}

export default Currency;
