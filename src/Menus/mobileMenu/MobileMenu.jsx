import React from "react";
import {
  FiCreditCard,
  FiDatabase,
  FiGrid,
  FiLogOut,
  FiRepeat,
  FiSettings,
  FiShuffle,
} from "react-icons/fi";
import { Wrapper } from "./styles";

function MobileMenu() {
  return (
    <Wrapper>
      <input type="checkbox" name="" id="menu-hamburguer" />
      <label for="menu-hamburguer">
        <div class="menu">
          <span class="hamburguer"></span>
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
    </Wrapper>
  );
}

export default MobileMenu;