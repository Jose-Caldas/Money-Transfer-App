import React from "react";
import { Container, Profile } from "./styled";
import image from "../../../assets/avatar.png";
import {
  FiCreditCard,
  FiDatabase,
  FiGrid,
  FiLogOut,
  FiRepeat,
  FiSettings,
  FiShuffle,
} from "react-icons/fi";

function TopMenu() {
  return (
    <Container>
      <ul>
        <Profile>
          <img src={image} alt="" srcset="" />
          <div className="info">
            <strong>José Caldas</strong>
            <small>2312T45B</small>
          </div>
        </Profile>
        <li>
          <FiGrid />
          <h1> Services</h1>
        </li>
        <li>
          <FiRepeat />
          <h1>Transactions</h1>
        </li>
        <li>
          <FiShuffle style={{ color: "var(--pink200)" }} />
          <h1 style={{ color: "var(--pink200)" }}> Send Money</h1>
        </li>
        <li>
          <FiCreditCard />
          <h1> Cards</h1>
        </li>
        <li>
          <FiDatabase />
          <h1> History</h1>
        </li>
        <li>
          <FiSettings />
          <h1> Settings</h1>
        </li>
        <li>
          <FiLogOut />
          <h1> Log Out</h1>
        </li>
      </ul>
    </Container>
  );
}

export default TopMenu;
