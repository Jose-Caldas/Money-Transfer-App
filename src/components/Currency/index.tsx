import { Container } from "./styled";

import { FiRefreshCcw } from "react-icons/fi";
import { Select } from "antd";

import { useCurrencies } from "../context/useCurrencies";
import { useStore } from "../context/store";
import { convert } from "cashify";
import { rates } from "../Main/index";
import { useEffect } from "react";
const { Option } = Select;

function Currencies() {
  const store = useStore((state) => state);

  const { currencies } = useCurrencies();

  const handleFromAmountChange = (e) => {
    if (e.target.value >= 0) {
      store.setFromAmount(e.target.value);
    }
  };

  // localStorage.setItem("store", JSON.stringify(store.toAmount));
  // const data = localStorage.getItem("store");
  // console.log(data);

  const handleToAmountChange = (e) => {
    const result = convert(Number(e.target.value), {
      from: store.from,
      to: store.to,
      base: "EUR",
      rates,
    });

    store.setFromAmount(Number(result.toFixed(2)));
  };

  function refresh() {
    store.setFrom(store.to);
    store.setTo(store.from);
  }

  useEffect(() => {
    const result = convert(store.fromAmount, {
      from: store.from,
      to: store.to,
      base: "EUR",
      rates,
    });
    store.setFromAmount(Number(result.toFixed(2)));
  }, [store.from, store.to]);

  return (
    <Container>
      <div className="currency-select">
        <div className="select">
          <Select
            placeholder="Select a country"
            value={store.from}
            onChange={(value) => store.setFrom(value)}
          >
            {currencies.map((currency) => (
              <Option
                style={{
                  fontSize: 15,
                }}
                key={currency.id}
                value={currency.id}
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
            <small>{store.from}</small>
          </div>
        </div>
        <button className="refresh" onClick={() => refresh()}>
          <FiRefreshCcw />
        </button>
        <div className="select">
          <Select
            placeholder="Select a country"
            value={store.to}
            onChange={(value) => store.setTo(value)}
            defaultValue={store.to}
          >
            {currencies.map((currency) => (
              <Option
                style={{
                  fontSize: 15,
                }}
                key={currency.id}
                value={currency.id}
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
            <small>{store.to}</small>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Currencies;
