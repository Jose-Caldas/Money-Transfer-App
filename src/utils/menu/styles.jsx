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

  @media (max-width: 768px) {
    .menu {
      width: 60px;
      height: 60px;
      background-color: #f5f7fa;
      border-radius: 50%;
      position: fixed;
      top: 25px;
      right: 25px;
      cursor: pointer;
      box-shadow: 0 0 0 0 #f5f7fa, 0 0 0 0 #f5f7fa;
      transition: box-shadow 1.1s cubic-bezier(0.19, 1, 0.22, 1);

      visibility: visible;
      z-index: 10;
    }

    .menu:hover {
      box-shadow: 0 0 0 8px #f5f7fa, 0 0 0 8px #f5f7fa;
    }

    .hamburguer {
      display: block;
      width: 30px;
      height: 2px;
      background-color: black;
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
      background-color: black;
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
      box-shadow: 0 0 0 130vw #f5f7fa, 0 0 0 130vh #f5f7fa;
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
      color: var(--title);
      margin-bottom: 25px;
      width: 100%;

      padding: 5px 40px;
    }
    a svg {
      margin-right: 20px;
    }
  }
`;
