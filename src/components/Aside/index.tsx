import { Container, Wrapper } from "./styled";
import {
  FiArrowRight,
  FiCalendar,
  FiDollarSign,
  FiFileText,
  FiHelpCircle,
  FiShuffle,
} from "react-icons/fi";

import image from "../../assets/brazil.png";
import image2 from "../../assets/germany.png";
import { useStore } from "../context/store";

function Aside() {
  const store = useStore();

  function message() {
    if (store.conversionRate && store.fromAmount) {
      alert(
        `Transaction completed: You send: ${store.fromAmount} / Recipient gets: ${store.toAmount} / Conversion Rate: ${store.conversionRate} / Delivery: ${store.date} / Payment Details: ${store.plan}`
      );
    } else {
      alert("Incomplete Transaction: Choose a Plan and a Currency Conversion");
    }
  }

  return (
    <Container>
      <header>
        <button>
          <FiFileText />
        </button>
        <button>
          <FiHelpCircle />
        </button>
      </header>
      <div className="aside-container">
        <Wrapper>
          <div className="details">
            <h1>Payment Details</h1>
            <h2>{!store.plan ? "waiting for a plan..." : store.plan}</h2>
          </div>
          <div className="content">
            <div>
              <h2>{store.fromAmount}</h2>
              <img src={image} alt="" />
              {store.from}
            </div>
            <div>
              <FiArrowRight />
            </div>

            <div>
              <h2>{store.toAmount}</h2>
              <img src={image2} alt="" />
              {store.to}
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
              <strong onChange={() => store.changeDate}>{store.date}</strong>
            </div>
            <div className="info-content">
              <div>
                <FiDollarSign />
                <h3>You send</h3>
              </div>
              <strong>{store.fromAmount}</strong>
            </div>
            <div className="info-content">
              <div>
                <FiShuffle />
                <h3>Recipient gets</h3>
              </div>

              <strong>{store.toAmount}</strong>
            </div>
            <div className="info-content">
              <div>
                <FiDollarSign />
                <h3>Conversion rate</h3>
              </div>

              <strong>{store.conversionRate}</strong>
            </div>
          </div>
          <button title="Confirm transaction" onClick={message}>
            Confirm
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Aside;
