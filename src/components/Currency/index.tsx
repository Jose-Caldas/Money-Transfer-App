import { Container } from "./styled";

import { FiRefreshCcw } from "react-icons/fi";
import { Select } from "antd";

import { UseCurrencies } from "../context/useCurrencies";
import { useState } from "react";
import { useStore } from "../Main";
import { convert } from "cashify";
import { rates } from "../Main/index";
const { Option } = Select;

function Currencies() {
  const store = useStore((state) => state);
  const { setFromAmount, setToAmount } = useStore();

  const { currencies } = UseCurrencies();

  const [fromCurrency, setFromCurrency] = useState("European Union");
  const [toCurrency, setToCurrency] = useState("Canada");

  const handleFromAmountChange = (e) => {
    if (e.target.value >= 0) {
      store.setFromAmount(e.target.value);
    }
  };
  const handleToAmountChange = (e) => {
    const result = convert(Number(e.target.value), {
      from: "EUR",
      to: "CAD",
      base: "EUR",
      rates,
    });

    store.setFromAmount(Number(result.toFixed(2)));
  };

  function refresh() {
    setFromCurrency("European Union");
    setToCurrency("Canada");
    setFromAmount(0);
    setToAmount(0);
  }

  return (
    <Container>
      <div className="currency-select">
        <div className="select">
          <Select
            placeholder="Select a country"
            value={fromCurrency}
            onChange={(value) => setFromCurrency(value)}
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
            <small>EUR</small>
          </div>
        </div>
        <button className="refresh" onClick={() => refresh()}>
          <FiRefreshCcw />
        </button>
        <div className="select">
          <Select
            placeholder="Select a country"
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
                To:
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
            <small>CAD</small>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Currencies;
