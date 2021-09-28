import { Button } from "./styled";
import { FaCheckCircle } from "react-icons/fa";

export type PlansProps = {
  title: string;
  text: string;
  price: number;
};

function Plans({ title, text, price }: PlansProps) {
  return (
    <Button>
      <div className="checkbox">
        <FaCheckCircle />
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
