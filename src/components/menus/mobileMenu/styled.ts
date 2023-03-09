import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 0;
  height: 0;

  @media (max-width: 947px) {
    width: 100%;
    height: 113px;
  }
`;

export const Header = styled.div`
  width: 100%;

  display: none;

  @media (max-width: 947px) {
    display: block;
    display: flex;
    align-items: center;
    gap: 16px;

    .profile-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Wrapper = styled.div`
  display: none;

  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .menu {
    width: 60px;
    height: 60px;
    background-color: #f7f5fa;
    border-radius: 50%;
    position: absolute;
    top: 48px;
    right: 23px;
    cursor: pointer;
    box-shadow: 0 0 0 0 #f7f5fa, 0 0 0 0 #f7f5fa;
    transition: box-shadow 1.1s cubic-bezier(0.19, 1, 0.22, 1);
    z-index: 10;
  }

  .menu:hover {
    box-shadow: 0 0 0 8px #f7f5fa, 0 0 0 8px #f7f5fa;
  }

  .hamburguer {
    display: block;
    width: 30px;
    height: 2px;
    background-color: #1f2933;
    position: relative;
    top: 29px;
    left: 15px;
    transition: 0.5s ease-in-out;
  }

  .hamburguer:before,
  .hamburguer:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: #1f2933;
    position: absolute;
    transition: 0.5s ease-in-out;
  }

  .hamburguer:before {
    top: -10px;
  }
  .hamburguer:after {
    bottom: -10px;
  }

  input {
    display: none;
  }

  input:checked ~ label .menu {
    box-shadow: 0 0 0 130vw #f7f5fa, 0 0 0 130vh #f7f5fa;
  }

  input:checked ~ label .hamburguer {
    transform: rotate(45deg);
  }
  input:checked ~ label .hamburguer:before {
    transform: rotate(90deg);
    top: 0;
  }
  input:checked ~ label .hamburguer:after {
    transform: rotate(90deg);
    bottom: 0;
  }

  input:checked ~ ul {
    display: block;
    z-index: 10;
  }

  ul {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    display: none;
    transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    position: fixed;
  }

  a {
    display: flex;
    font-size: 20px;
    text-decoration: none;
    color: #1f2933;
    margin-bottom: 40px;
    align-items: center;
  }

  a svg {
    margin-right: 20px;
  }

  @media (max-width: 947px) {
    display: block;
    z-index: 10;
  }
`;
