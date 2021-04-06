import React from "react";
import { Container } from "./styled";

function Plans({ title, text, number }) {
  return (
    <Container>
      <div className="checkbox"></div>
      <div className="center">
        <div class="options">
          <div>
            <h2>{title}</h2>
            <small>{text}</small>
          </div>
        </div>
        <div>
          <span>{number}</span>
        </div>
      </div>
    </Container>
  );
}

export default Plans;
