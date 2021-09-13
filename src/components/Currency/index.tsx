import { useEffect, useState } from "react";
import { Container } from "./styled";
import axios from "axios";

import { FiRefreshCcw } from "react-icons/fi";
import { Select } from "antd";

import mockrates from "../../mocks/rates.json";

export type Currency = {
  label: string;
  id: string;
  value: string;
  flag: string;
};

export interface CurrencyProps {
  currencies: Currency[];
}

const { Option } = Select;

function Currencies() {
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  const API_BASE_URL =
    "https://run.mocky.io/v3/87a9b305-789c-4fa8-8b1f-f38ecfbf8534";

  const fetchCurrencies = async () => {
    const res = await axios.get(API_BASE_URL);
    const { currencies } = await res.data;
    setCurrencies(currencies);
  };

  const { convert } = require("cashify");

  const base = "EUR";

  const rates = mockrates;
  console.log(rates.BRL.toFixed(2));

  const result = convert(10, { from: "EUR", to: "GBP", base, rates });

  console.log(result);

  useEffect(() => {
    fetchCurrencies();
  }, []);

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
