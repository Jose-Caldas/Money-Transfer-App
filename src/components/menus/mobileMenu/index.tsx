import React from "react";
import { Container } from "./styled";

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
      <input type="checkbox" name="" id="menu-hamburguer" />
      <label htmlFor="menu-hamburguer">
        <div className="menu">
          <span className="hamburguer"></span>
        </div>
      </label>
      <ul>
        <li>
          <a href="#app">
            <FiGrid />
            Services
          </a>
        </li>
        <li>
          <a href="#app">
            <FiRepeat />
            Transactions
          </a>
        </li>
        <li>
          <a href="#app">
            <FiShuffle />
            Send Money
          </a>
        </li>
        <li>
          <a href="#app">
            <FiCreditCard />
            Cards
          </a>
        </li>
        <li>
          <a href="#app">
            <FiDatabase />
            History
          </a>
        </li>
        <li>
          <a href="#app">
            <FiSettings />
            Settings
          </a>
        </li>
        <li>
          <a href="#app">
            <FiLogOut />
            Log Out
          </a>
        </li>
      </ul>
    </Container>
  );
}

export default MobileMenu;
