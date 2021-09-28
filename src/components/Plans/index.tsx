import { Button } from "./styled";
// import { FaCheckCircle } from "react-icons/fa";
import { useStore } from "../Main";

export type PlansProps = {
  title: string;
  text: string;
  price: number;
};

function Plans({ title, text = "Express", price = 1.99 }: PlansProps) {
  const changeBankTransaction = useStore(
    (state) => state.changeBankTransaction
  );
  const changePlan = useStore((state) => state.changePlan);

  const handleChange = () => {
    changeBankTransaction(price);
    changePlan(text);
  };

  // const handleChangeText = () => {
  //   changePlan(text);
  // };
  return (
    <Button>
      <div className="checkbox">
        {/* <FaCheckCircle /> */}
        <input type="radio" name="plan1" id="plan1" onChange={handleChange} />
      </div>
      <div className="center">
        <div className="options">
          <h2>{title}</h2>

          <small>{text}</small>
        </div>

        <div>
          <span>{price}</span>
        </div>
      </div>
    </Button>
  );
}

export default Plans;
