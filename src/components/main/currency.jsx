import React from "react";
import { SelectContainer } from "./styles";
import { Select } from "antd";

const { Option } = Select;

function Currency(props) {
  const {
    currencyOptions,
    selectedCurrency,

    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props;

  return (
    <>
      <SelectContainer>
        <div className="select">
          {/* <Select>
            {currencyOptions.map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select> */}
          <select
            value={selectedCurrency}
            onChange={onChangeCurrency}
            name="countries"
            id="countries"
          >
            {currencyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div class="transfer">
          <div>
            <small>You send</small>
            <input
              value={amount}
              onChange={onChangeAmount}
              type="number"
              name=""
              id=""
            />
          </div>
        </div>
      </SelectContainer>
    </>
  );
}

export default Currency;
