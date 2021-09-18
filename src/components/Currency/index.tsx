import { Container } from "./styled";

import { FiRefreshCcw } from "react-icons/fi";
import { Select } from "antd";

import { UseCurrencies } from "../context/useCurrencies";
import { useEffect, useState } from "react";
import { useStore } from "../Main";
import { convert } from "cashify";
import { rates } from "../Main/index";
const { Option } = Select;

function Currencies() {
  const store = useStore((state) => state);

  const { currencies } = UseCurrencies();

  const [fromCurrency, setFromCurrency] = useState("Canada");
  const [toCurrency, setToCurrency] = useState("Brazil");

  const handleFromAmountChange = (e) => {
    if (e.target.value >= 0) {
      console.log(e.target.value);
      store.setFromAmount(e.target.value);
    }
  };
  const handleToAmountChange = (e) => {
    const result = convert(Number(e.target.value), {
      from: "CAD",
      to: "EUR",
      base: "EUR",
      rates,
    });

    store.setFromAmount(Number(result.toFixed(2)));
  };

  useEffect(() => {}, []);

  return (
    <Container>
      <div className="currency-select">
        <div className="select">
          <Select
            value={fromCurrency}
            onChange={(value) => setFromCurrency(value)}
            defaultValue={fromCurrency}
          >
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
            <input
              value={store.fromAmount}
              type="number"
              min={1}
              onChange={handleFromAmountChange}
            ></input>
          </div>
        </div>
        <button className="refresh">
          <FiRefreshCcw />
        </button>
        <div className="select">
          <Select
            value={toCurrency}
            onChange={(value) => setToCurrency(value)}
            defaultValue={toCurrency}
          >
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
            <small>Recipient gets</small>

            <input
              type="number"
              min={1}
              value={store.toAmount}
              onChange={handleToAmountChange}
            ></input>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Currencies;
