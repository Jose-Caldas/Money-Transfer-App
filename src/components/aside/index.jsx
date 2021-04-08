import React from "react";
import {
  FiArrowRight,
  FiCalendar,
  FiDollarSign,
  FiFileText,
  FiHelpCircle,
  FiShuffle,
} from "react-icons/fi";
import { Container, Wrapper } from "./styles";
import image from "../../assets/brazil.png";
import image2 from "../../assets/germany.png";

function Aside() {
  return (
    <Container>
      <header>
        <button className="button-top">
          <FiFileText />
        </button>
        <button>
          <FiHelpCircle />
        </button>
      </header>
      <div className="aside-container">
        <Wrapper>
          <h1>Payment Details</h1>
          <div className="content">
            <div>
              <h2>22,124</h2>
              <img src={image} alt="" srcset="" />
              BRL
            </div>
            <div>
              <FiArrowRight />
            </div>

            <div>
              <h2>4,124</h2>
              <img src={image2} alt="" srcset="" />
              EUR
            </div>
          </div>
        </Wrapper>
        <div className="info">
          <div>
            <div className="info-content">
              <div>
                <FiCalendar />
                <h3>Delivery</h3>
              </div>
              <strong>27 July till 12pm</strong>
            </div>
            <div className="info-content">
              <div>
                <FiDollarSign />
                <h3>Conversion rate</h3>
              </div>
              <strong>22,124</strong>
            </div>
            <div className="info-content">
              <div>
                <FiShuffle />
                <h3>Recipient gets</h3>
              </div>
              <strong>4,124</strong>
            </div>
          </div>
          <button>Confirm</button>
        </div>
      </div>
    </Container>
  );
}

export default Aside;
