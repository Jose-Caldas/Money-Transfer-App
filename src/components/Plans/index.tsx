import { Button } from "./styled";
import { useStore } from "../Main";

export type PlansProps = {
  date: string;
  text: string;
  price: number;
};

function Plans({ date, text = "Express", price = 1.99 }: PlansProps) {
  const changeConversionRate = useStore((state) => state.changeConversionRate);
  const changePlan = useStore((state) => state.changePlan);

  const handleChange = () => {
    changeConversionRate(price);
    changePlan(text);
  };

  return (
    <Button onChange={handleChange}>
      <div className="checkbox">
        <input type="radio" name="plan" id={text} value={text} />
        <label htmlFor={text}>{text}</label>
      </div>
      <div className="center">
        <div className="options">
          <h2>{date}</h2>
        </div>

        <div>
          <span>{price}</span>
        </div>
      </div>
    </Button>
  );
}

export default Plans;
