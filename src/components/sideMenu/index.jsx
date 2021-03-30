import React from "react";
import { Container, Section, Footer } from "./styles";
import image from "../../assets/avatar.png";
import {
  FiGrid,
  FiRepeat,
  FiShuffle,
  FiCreditCard,
  FiDatabase,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

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
        <FiRepeat />
        <h3>Transactions</h3>
      </Section>
      <Section>
        <FiShuffle style={{ color: "var(--pink200) ", fontWeight: "600" }} />
        <h3 style={{ color: "var(--pink200)", fontWeight: "600" }}>
          Send Money
        </h3>
      </Section>
      <Section>
        <FiCreditCard />
        <h3>Cards</h3>
      </Section>
      <Section>
        <FiDatabase />
        <h3>History</h3>
      </Section>
      <Footer>
        <Section>
          <FiSettings />
          <h3>Settings</h3>
        </Section>
        <Section>
          <FiLogOut />
          <h3>Log Out</h3>
        </Section>
      </Footer>
    </Container>
  );
}

export default SideMenu;
