import React from "react";
import { Container } from "./styles";
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
    <Container id="app">
      <header>
        <img src={image} alt="" srcset="" />
        <div className="info">
          <strong>José Caldas</strong>
          <small>2312T45B</small>
        </div>
      </header>
      <div className="navigation">
        <ul>
          <li>
            <span>
              <FiGrid />
              Services
            </span>
          </li>
          <li>
            <FiRepeat />
            <span>Transactions</span>
          </li>
          <li>
            <FiShuffle style={{ color: "var(--pink200)" }} />
            <span style={{ color: "var(--pink200)" }}>Send Money</span>
          </li>
          <li>
            <FiCreditCard />
            <span>Cards</span>
          </li>
          <li>
            <FiDatabase />
            <span>History</span>
          </li>
        </ul>
      </div>
      <footer>
        <ul>
          <li>
            <FiSettings />
            <span>Settings</span>
          </li>
          <li>
            <FiLogOut />
            <span>Log Out</span>
          </li>
        </ul>
      </footer>
    </Container>
  );
}

export default SideMenu;
