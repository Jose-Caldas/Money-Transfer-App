import React, { useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";

import { Select } from "antd";

import currenciesMock from "../../mocks/currencies.json";
import { SelectContainer } from "./styled";
import styled from "styled-components";

const { Option } = Select;
const StyledSelect = styled(Select)`
  width: 100%;
`;

function Currency() {
  const [currencies] = useState(currenciesMock.currencies);
  console.log(currencies);
  return (
    <SelectContainer>
      <div className="transfer">
        <div className="select">
          <StyledSelect>
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
          </StyledSelect>
          <div class="transfer-content">
            <small>You send</small>
            <input type="number"></input>
          </div>
        </div>
        <button className="refresh">
          <FiRefreshCcw />
        </button>
        <div className="select">
          <StyledSelect>
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
          </StyledSelect>
          <div class="transfer-content">
            <small>Recipient gets</small>
            <input type="number"></input>
          </div>
        </div>
      </div>
    </SelectContainer>
  );
}

export default Currency;
