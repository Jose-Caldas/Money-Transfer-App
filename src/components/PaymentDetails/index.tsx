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

function PaymentDetails() {
  const store = useStore();

  const handleConfirm = () => {
    const message = {
      message: "Transaction completed",
      sentAt: `${store.date}`,
      plan: `${store.plan}`,
      sent: `${store.fromAmount}`,
      received: `${store.toAmount}`,
      from: `${store.from}`,
      to: `${store.to}`,
    };
    if (store.conversionRate && store.fromAmount) {
      window.alert(JSON.stringify(message, null, 2));
    } else {
      alert("Incomplete transaction: Choose a plan to confirm shipment");
    }
  };

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

  return (
    <Container>
      <header>
        <button onClick={handleConfirm}>
          <FiFileText />
        </button>
        <button onClick={handleConfirm}>
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
          <button title="Confirm transaction" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </Container>
  );
}

export default PaymentDetails;
