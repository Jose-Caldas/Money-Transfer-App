import styled from "styled-components";

export const Container = styled.div`
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
    background-color: #446677;
    border-radius: 50%;
    position: fixed;
    top: 20px;
    right: 75px;
    cursor: pointer;
    box-shadow: 0 0 0 0 #446677, 0 0 0 0 #446677;
    transition: box-shadow 1.1s cubic-bezier(0.19, 1, 0.22, 1);
    z-index: 10;
  }

  .menu:hover {
    box-shadow: 0 0 0 8px #446677, 0 0 0 8px #446677;
  }

  .hamburguer {
    display: block;
    width: 30px;
    height: 2px;
    background-color: #fff;
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
    background-color: #fff;
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
    box-shadow: 0 0 0 130vw #446677, 0 0 0 130vh #446677;
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
    opacity: 1;
    z-index: 10;
  }

  ul {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    opacity: 0;
    transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    position: fixed;
  }

  a {
    display: flex;
    font-size: 20px;
    text-decoration: none;
    color: #fff;
    margin-bottom: 40px;
    align-items: center;
  }

  a svg {
    margin-right: 20px;
  }

  @media (max-width: 890px) {
    display: block;
    z-index: 10;
  }
`;
