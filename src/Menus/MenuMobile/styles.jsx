import styled from "styled-components";

export const Wrapper = styled.div`
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .menu {
    visibility: hidden;
  }
  ul {
    visibility: hidden;
    width: 0;
  }

  input {
    display: none;
  }

  .hamburguer:before,
  .hamburguer:after {
    background-color: transparent;
  }

  .hamburguer {
    background-color: transparent;
  }

  @media (max-width: 1024px) {
    .menu {
      visibility: hidden;
      width: 0;
      height: 0;
    }
    ul {
      visibility: hidden;
      width: 0;
      height: 0;
    }
  }

  @media (max-width: 890px) {
    .menu {
      width: 60px;
      height: 60px;
      background-color: #446677;
      border-radius: 50%;
      position: fixed;
      top: 25px;
      right: 25px;
      cursor: pointer;
      box-shadow: 0 0 0 0 #446677, 0 0 0 0 #446677;
      transition: box-shadow 1.1s cubic-bezier(0.19, 1, 0.22, 1);

      visibility: visible;
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
    }

    ul {
      position: absolute;
      position: fixed;

      list-style: none;
      opacity: 0;
      transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
      width: 100%;
      visibility: visible;
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 20px;
    }

    li {
      width: 100%;
    }

    a {
      display: block;
      font-size: 20px;
      text-decoration: none;
      color: #fff;
      margin-bottom: 25px;
      width: 100%;

      padding: 5px 40px;
    }
    a svg {
      margin-right: 20px;
    }
  }
`;
