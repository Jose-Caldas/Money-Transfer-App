import { Container, Wrapper } from "./styled";
import {
  FiArrowRight,
  FiCalendar,
  FiDollarSign,
  FiFileText,
  FiHelpCircle,
  FiShuffle,
} from "react-icons/fi";

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

  const numberFrom = store.fromAmount;

  const formatFrom = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: store.from,
  }).format(numberFrom);
  const numberTo = store.toAmount;

  const formatTo = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: store.to,
  }).format(numberTo);

  console.log(formatFrom, formatTo);

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
            <div className="plan-detail">
              <h2>Plan:</h2>
              <strong>{store.plan}</strong>
            </div>
          </div>
          <div className="content">
            <div>
              <h2>{formatFrom}</h2>
              {store.from}
            </div>
            <div>
              <FiArrowRight />
            </div>

            <div>
              <h2>{formatTo}</h2>
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
              <strong>{formatFrom}</strong>
            </div>
            <div className="info-content">
              <div>
                <FiShuffle />
                <h3>Recipient gets</h3>
              </div>

              <strong>{formatTo}</strong>
            </div>
            <div className="info-content">
              <div>
                <FiDollarSign />
                <h3>Conversion rate</h3>
              </div>

              <strong>$ {store.conversionRate}</strong>
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
