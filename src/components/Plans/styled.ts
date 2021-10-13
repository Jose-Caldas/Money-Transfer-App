import styled from "styled-components";

export const Label = styled.label`
  width: 100%;
  height: 83px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 2px solid var(--gray400);
  border-radius: 4px;
  padding: 10px;
  margin-top: 20px;
  background: transparent;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 2px #f364a2;
    background-color: #fff6f9;
    border: 2px solid #f364a2;
  }

  .plan-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  h2 {
    font-size: 18px;
    color: ${(props) => props.theme.h2};
    font-weight: 500;
  }

  small {
    font-size: 14px;
    color: ${(props) => props.theme.planSmall};
  }

  span {
    color: ${(props) => props.theme.title};
    font-size: 18px;
    font-weight: 600;
  }

  .options {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
  }

  .center {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: start;
  }

  .radio input {
    cursor: pointer;
  }

  .radio svg {
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.checkbox};
    color: ${(props) => props.theme.checkbox};
    margin-right: 20px;
    border: 1px solid gray;
    border-radius: 50%;
    color: #f364a2;

    &:focus {
      display: block;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;
