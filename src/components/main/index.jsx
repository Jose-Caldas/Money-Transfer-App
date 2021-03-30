import React from "react";
import { Container } from "./styles";
// import image from "../../assets/brasil.png";

function Main() {
  return (
    <Container>
      <h1>Send Money</h1>
      <div class="content">
        <h2>22,124</h2>
        <span>available</span>
      </div>
      <div>
        <select name="countries" id="countries">
          <option value="countries">from: Brasil</option>
          <option value="countries">from: Argentina</option>
          <option value="countries">from: USA</option>
        </select>
        <select name="countries" id="countries">
          <option value="countries">from: Alemanha</option>
          <option value="countries">from: Holanda</option>
          <option value="countries">from: Itália</option>
        </select>
      </div>
    </Container>
  );
}

export default Main;
