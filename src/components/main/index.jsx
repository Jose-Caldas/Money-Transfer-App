import React, { useEffect, useState } from "react";
import { Container, CurrancyContainer } from "./styles";
// import image from "../../assets/brasil.png";
// import { FiRefreshCcw } from "react-icons/fi";
import { FiRefreshCcw } from "react-icons/fi";
import { DatePicker } from "antd";

import { RiCheckboxCircleLine } from "react-icons/ri";
import Currency from "./currency";

const BASE_URL = "https://api.exchangeratesapi.io/latest";

function Main() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then((res) => res.json())
        .then((data) => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }
  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <Container>
      <h1>Send Money</h1>
      <div class="content">
        <h2>22,124</h2>
        <span>available</span>
      </div>
      <CurrancyContainer>
        <Currency
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
          onChangeAmount={handleFromAmountChange}
          amount={fromAmount}
        />
        <div className="refresh">
          <FiRefreshCcw />
        </div>
        <Currency
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
          onChangeAmount={handleToAmountChange}
          amount={toAmount}
        />
      </CurrancyContainer>

      <div className="choose">
        <h1>Choose a plan:</h1>
        <div>
          <h2>Choose the date:</h2>
          {/* <input type="date" name="" id="" /> */}
          <DatePicker onChange={console.log} />
        </div>
      </div>
      <div className="options">
        <div>
          <input type="radio" id="radio1" name="input-radio" />
          <label for="radio1">
            <div class="opt">
              <div>
                <RiCheckboxCircleLine />
                <div>
                  <h2>Get 27 July 2020 till 12pm</h2>
                  <small>Express</small>
                </div>
              </div>
              <div>
                <span>$ 0.99</span>
              </div>
            </div>
          </label>
        </div>
        <div>
          <input type="radio" id="radio2" name="input-radio" />
          <label for="radio2">
            <div class="opt">
              <div>
                <RiCheckboxCircleLine />
                <div>
                  <h2>Get 27 July 2020 till 6pm</h2>
                  <small>Standard</small>
                </div>
              </div>
              <div>
                <span>$ 1.00</span>
              </div>
            </div>
          </label>
        </div>
        <div>
          <input type="radio" id="radio3" name="input-radio" />
          <label for="radio3">
            <div class="opt">
              <div>
                <RiCheckboxCircleLine />
                <div>
                  <h2>Get today till 8pm</h2>
                  <small>Only on working days from 11am to 8pm</small>
                </div>
              </div>
              <div>
                <span>$ 1.00</span>
              </div>
            </div>
          </label>
        </div>
      </div>
    </Container>
  );
}

export default Main;
