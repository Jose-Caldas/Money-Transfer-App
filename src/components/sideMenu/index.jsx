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
        <div className="info">
          <h1>José Caldas</h1>
          <h2>2312T45B</h2>
        </div>
      </header>
      <Section>
        <button>
          <FiGrid />
          <h3>Services</h3>
        </button>
      </Section>
      <Section>
        <button>
          <FiRepeat />
          <h3>Transactions</h3>
        </button>
      </Section>
      <Section>
        <button onFocus>
          <FiShuffle />
          <h3>Send Money</h3>
        </button>
      </Section>
      <Section>
        <button>
          <FiCreditCard />
          <h3>Cards</h3>
        </button>
      </Section>
      <Section>
        <button>
          <FiDatabase />
          <h3>History</h3>
        </button>
      </Section>
      <Footer>
        <Section>
          <button>
            <FiSettings />
            <h3>Settings</h3>
          </button>
        </Section>
        <Section>
          <button>
            <FiLogOut />
            <h3>Log Out</h3>
          </button>
        </Section>
      </Footer>
    </Container>
  );
}

export default SideMenu;
