import ButtonGroup from "antd/lib/button/button-group";
import styled from "styled-components";
import { Button } from "antd";

export const Container = styled.div`
  margin-top: 4rem;
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  margin-bottom: 2rem;

  input {
    width: 150px;
    font-size: 30px;
    font-weight: 600;
    color: #323f4b;
    background-color: transparent;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const ButtonWrapper = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Refresh = styled(Button)`
  border: none;
`;

export const Select = styled.select`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Transfer = styled.div`
  background-color: var(--gray200);
  margin-top: 28px;
  padding: 2rem;
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
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0 1rem 2rem;
  border-radius: 8px;
  background-color: var(--gray200);
`;
