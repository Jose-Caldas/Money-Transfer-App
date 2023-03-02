import React from "react";
import { Container, Wrapper, Header } from "./styled";
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

function MobileMenu() {
  return (
    <Container>
      <Header>
        <div>
          <img src={image} alt="avatar" />
        </div>
        <div className="profile-info">
          <strong>Jose Caldas</strong>
          <small>2312T45B</small>
        </div>
      </Header>
      <Wrapper>
        <input type="checkbox" name="" id="menu-hamburguer" />
        <label htmlFor="menu-hamburguer">
          <div className="menu">
            <span className="hamburguer"></span>
          </div>
        </label>
        <ul>
          <li>
            <a href="/">
              <FiGrid />
              Services
            </a>
          </li>
          <li>
            <a href="/">
              <FiRepeat />
              Transactions
            </a>
          </li>
          <li>
            <a href="/">
              <FiShuffle />
              Send Money
            </a>
          </li>
          <li>
            <a href="/">
              <FiCreditCard />
              Cards
            </a>
          </li>
          <li>
            <a href="/">
              <FiDatabase />
              History
            </a>
          </li>
          <li>
            <a href="/">
              <FiSettings />
              Settings
            </a>
          </li>
          <li>
            <a href="/">
              <FiLogOut />
              Log Out
            </a>
          </li>
        </ul>
      </Wrapper>
    </Container>
  );
}

export default MobileMenu;
