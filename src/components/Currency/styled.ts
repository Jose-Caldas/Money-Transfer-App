import styled from "styled-components";
import { Button } from "antd";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;

    font-size: 30px;
    font-weight: 600;
    color: #323f4b;
    background-color: transparent;
    -moz-appearance: textfield;
  }

  /* Works for Chrome, Safari, Edge, Opera */
  .toAmount::-webkit-outer-spin-button,
  .toAmount::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Works for Firefox */
  .toAmount {
    -moz-appearance: textfield;
  }

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const ButtonWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Refresh = styled(Button)`
  border: none;
  &:hover {
    box-shadow: 0 0 5px 1px var(--gray400);
  }
`;

export const Select = styled.select`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Transfer = styled.div`
  background-color: var(--gray200);
  margin-top: 28px;
  padding: 2rem 1rem;
  border-radius: 8px;

  p {
    font-size: 14px;
    color: var(--gray);
    margin-bottom: 1rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--gray200);
`;
