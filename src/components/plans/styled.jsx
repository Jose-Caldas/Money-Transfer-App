import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 83px;
  display: flex;
  align-items: center;

  border: 2px solid var(--gray400);
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  background: transparent;
  &:hover {
    box-shadow: 0 0 20px var(--gray400);
    /* transition: 0.2s ease-in-out; */
  }

  &:focus {
    background: #fff6f9;
    border: 2px solid #ff8cba;
    border-radius: 4px;

    .checkbox svg {
      width: 20px;
      height: 20px;
      color: var(--pink200);
      border: none;
    }
  }

  h2 {
    font-size: 18px;
    color: #3e4c59;
    font-weight: 500;
  }

  small {
    font-size: 14px;
    color: #616e7c;
  }

  span {
    color: var(-title);
    font-size: 18px;
    font-weight: 600;
  }

  .options {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .center {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: start;
  }

  .checkbox svg {
    width: 20px;
    height: 20px;
    color: white;
    margin-right: 20px;
    border: 1px solid gray;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;