import { Label } from "./styled";
import { useStore } from "../context/store";

export type PlansProps = {
  date: string;
  text: string;
  price: number;
};

function Plans({ date, text, price }: PlansProps) {
  const changeConversionRate = useStore((state) => state.changeConversionRate);
  const changePlan = useStore((state) => state.changePlan);

  const handleChange = () => {
    changeConversionRate(price);
    changePlan(text);
  };

  return (
    <Label htmlFor={text}>
      <div
        className="plan-container"
        title={`Plan: ${text}`}
        onClick={handleChange}
      >
        <div className="radio">
          <input
            type="radio"
            name="plan"
            id={text}
            value={text}
            style={{ width: 20, height: 20, backgroundColor: "red" }}
          />
        </div>
        <div className="center">
          <div className="options">
            <h2>Get {date}</h2>
            {text}
          </div>

          <div>
            <span>$ {price}</span>
          </div>
        </div>
      </div>
    </Label>
  );
}

export default Plans;
