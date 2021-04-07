import React from "react";
import { Button } from "./styled";
import { FaCheckCircle } from "react-icons/fa";

function Plans({ title, text, number }) {
  // const [toggle, setToggle] = useState(true);

  return (
    <Button>
      <div className="checkbox">
        <FaCheckCircle />
      </div>
      <div className="center">
        <div class="options">
          <h2>{title}</h2>
          <small>{text}</small>
        </div>
        <div>
          <span>{number}</span>
        </div>
      </div>
    </Button>
  );
}

export default Plans;
