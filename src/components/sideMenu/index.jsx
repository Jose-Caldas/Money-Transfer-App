import React from "react";
import { Container, Section } from "./styles";
import image from "../../assets/avatar.png";
import { FiGrid } from "react-icons/fi";

function SideMenu() {
  return (
    <Container>
      <header>
        <img src={image} alt="" srcset="" />
        <h1>José Caldas</h1>
        <h2>2312T45B</h2>
      </header>
      <Section>
        <FiGrid />
        <h3>Services</h3>
      </Section>
      <Section>
        <FiGrid />
        <h3>Transactions</h3>
      </Section>
      <Section>
        <FiGrid />
        <h3>Send Money</h3>
      </Section>
      <Section>
        <FiGrid />
        <h3>Cards</h3>
      </Section>
      <Section>
        <FiGrid />
        <h3>Cards</h3>
      </Section>
    </Container>
  );
}

export default SideMenu;
