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
import { useStore } from "../Main";

function Aside() {
  const toAmount = useStore((state) => state.toAmount);
  const fromAmount = useStore((state) => state.fromAmount);
  const date = useStore((state) => state.date);
  const conversionRate = useStore((state) => state.conversionRate);
  const plan = useStore((state) => state.plan);
  console.log(date);
  const { changeDate } = useStore();

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
            <h2>{plan}</h2>
          </div>
          <div className="content">
            <div>
              <h2>{fromAmount}</h2>
              <img src={image} alt="" />
              BRL
            </div>
            <div>
              <FiArrowRight />
            </div>

            <div>
              <h2>{toAmount}</h2>
              <img src={image2} alt="" />
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
              <strong onChange={() => changeDate}>{date}</strong>
            </div>
            <div className="info-content">
              <div>
                <FiDollarSign />
                <h3>You send</h3>
              </div>
              <strong>{fromAmount}</strong>
            </div>
            <div className="info-content">
              <div>
                <FiShuffle />
                <h3>Recipient gets</h3>
              </div>

              <strong>{toAmount}</strong>
            </div>
            <div className="info-content">
              <div>
                <FiDollarSign />
                <h3>Conversion rate</h3>
              </div>

              <strong>{conversionRate}</strong>
            </div>
          </div>
          <button
            onClick={() =>
              window.alert(
                `Transaction completed: You send: ${fromAmount} / Recipient gets: ${toAmount} / Conversion Rate: ${conversionRate} / Delivery: ${date} / Payment Details: ${plan}`
              )
            }
          >
            Confirm
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Aside;
