import React from "react";
import { Container } from "./styles";
// import image from "../../assets/brasil.png";
import { FiRefreshCcw, FiCalendar } from "react-icons/fi";

function Main() {
  return (
    <Container>
      <h1>Send Money</h1>
      <div class="content">
        <h2>22,124</h2>
        <span>available</span>
      </div>
      <div className="select">
        <select name="countries" id="countries">
          <option value="countries">from: Brasil</option>
          <option value="countries">from: Argentina</option>
          <option value="countries">from: USA</option>
        </select>
        <select name="countries" id="countries">
          <option value="countries">from: Alemanha</option>
          <option value="countries">from: Holanda</option>
          <option value="countries">from: Itália</option>
        </select>
      </div>
      <div class="transfer">
        <div>
          <small>You send</small>
          <input type="number" name="" id="" />
        </div>
        <button>
          <FiRefreshCcw />
        </button>
        <div>
          <small>Recipient gets</small>
          <input type="number" name="" id="" />
        </div>
      </div>
      <div className="choose">
        <h1>Choose a plan:</h1>
        <div>
          <h2>Choose the date:</h2>
          <FiCalendar />
        </div>
      </div>
      <div className="options">
        <label For="rd">
          <input type="radio" name="rd" id="rd" />
          <div class="opt">
            <div>
              <h2>Get 27 July 2020 till 12pm</h2>
              <small>Standard</small>
            </div>
            <div>
              <span>$ 0.99</span>
            </div>
          </div>
        </label>
      </div>
    </Container>
  );
}

export default Main;
