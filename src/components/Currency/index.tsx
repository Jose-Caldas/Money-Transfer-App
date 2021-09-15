import { Container } from "./styled";

import { FiRefreshCcw } from "react-icons/fi";
import { Select } from "antd";

import mockrates from "../../mocks/rates.json";
import { UseCurrencies } from "../context/useCurrencies";

const { Option } = Select;

function Currencies() {
  const { currencies } = UseCurrencies();

  const { convert } = require("cashify");

  const base = "EUR";

  const rates = mockrates;
  console.log(rates.BRL.toFixed(2));

  const result = convert(10, { from: "EUR", to: "GBP", base, rates });

  console.log(result);

  return (
    <Container>
      <div className="currency-select">
        <div className="select">
          <Select>
            {currencies.map((currency) => (
              <Option
                style={{
                  fontSize: 15,
                }}
                key={currency.id}
                value={currency.label}
                id={currency.id}
                flag={currency.flag}
              >
                From:
                <img
                  src={currency.flag}
                  alt=""
                  style={{ width: 30, height: 30 }}
                />
                {currency.label}
              </Option>
            ))}
          </Select>
          <div className="transfer">
            <small>You send</small>
            <input type="number" min={1}></input>
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
                key={currencies.id}
                value={currencies.value}
                id={currencies.id}
              >
                To:
                <img
                  src={currencies.flag}
                  alt=""
                  style={{ width: 30, height: 30 }}
                />
                {currencies.label}
              </Option>
            ))}
          </Select>
          <div className="transfer">
            <small>Recipient gets</small>

            <input type="number" min={1}></input>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Currencies;
