import React from "react";
import { FiRefreshCcw } from "react-icons/fi";

import { SelectContainer } from "./styles";
import { Select } from "antd";

const { Option } = Select;

function Currency(props) {
  return (
    <>
      <SelectContainer>
        <div>
          <div></div>
          <div></div>
        </div>

        <div className="transfer">
          <div className="select">
            <Select>
              <Option>FROM</Option>
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
              <Option>To</Option>
            </Select>
            <div class="transfer-content">
              <small>Recipient gets</small>
              <input type="number"></input>
            </div>
          </div>
        </div>
      </SelectContainer>
    </>
  );
}

export default Currency;
