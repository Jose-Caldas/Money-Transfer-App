import React from "react";
import { Container, Header, Navigation } from "./styled";
import image from "../../../assets/avatar.png";
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
      <Header>
        <img src={image} alt="" />
        <div className="profile-info">
          <strong>John Doe</strong>
          <small>Something</small>
        </div>
      </Header>
      <Navigation>
        <div>
          <ul>
            <li>
              <div className="item-select"></div>
              <FiGrid />
              <span>Services</span>
            </li>
            <li>
              <div className="item-select"></div>
              <FiRepeat />
              <span>Transactions</span>
            </li>
            <li>
              <div className="item-select"></div>
              <FiShuffle style={{ color: "var(--pink200)" }} />
              <span style={{ color: "var(--pink200)" }}>Send Money</span>
            </li>
            <li>
              <div className="item-select"></div>
              <FiCreditCard />
              <span>Cards</span>
            </li>
            <li>
              <div className="item-select"></div>
              <FiDatabase />
              <span>History</span>
            </li>
          </ul>
        </div>
        <footer>
          <ul>
            <li>
              <div className="item-select"></div>
              <FiSettings />
              <span>Settings</span>
            </li>
            <li>
              <div className="item-select"></div>
              <FiLogOut />
              <span>Log Out</span>
            </li>
          </ul>
        </footer>
      </Navigation>
    </Container>
  );
}

export default SideMenu;
