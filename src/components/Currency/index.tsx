import { Container } from "./styled";

import { FiRefreshCcw } from "react-icons/fi";
import { Select } from "antd";

import { UseCurrencies } from "../context/useCurrencies";
import { useStore } from "../context/store";
import { convert } from "cashify";
import { rates } from "../Main/index";
const { Option } = Select;

function Currencies() {
  const store = useStore((state) => state);

  const { currencies } = UseCurrencies();

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
    store.setFrom("European Union");
    store.setTo("Canada");
    store.setFromAmount(0);
    store.setToAmount(0);
  }

  const handleChangeAbbreviation = () => {
    currencies.map((currency) => store.setAbbreviation(currency.id));
    console.log(currencies);
  };

  localStorage.setItem("store", store.toAmount.toString());
  const Storage = localStorage.getItem("store");
  console.log(Storage);

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
            <small onChange={handleChangeAbbreviation}>
              {store.abbreviation}
            </small>
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
