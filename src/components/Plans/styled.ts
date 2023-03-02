import styled from "styled-components";

export const Container = styled.section`
  margin-top: 1rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  span {
    opacity: 0;
    background-color: var(--pink200);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid var(--pink100);
  }

  input {
    &:checked + label {
      background-color: var(--pink300);
      border: 2px solid var(--pink100);
      span {
        opacity: 1;
      }
    }
  }
`;

export const Input = styled.input`
  appearance: none;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--gray400);
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    border: 2px solid var(--pink100);
  }

  h3 {
    color: var(--title);
    font-size: 18px;
    font-weight: 600;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--gray400);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: #fff;
  background-color: #fff;
  position: relative;

  svg {
    text-align: center;
    font-size: 16px;
    position: absolute;
    top: 1px;
    left: 1px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoPlan = styled.div`
  margin-left: 2rem;

  p {
    font-size: 18px;
    font-weight: 500;
    color: var(--title);
  }

  h2 {
    font-size: 14px;
    color: var(--subTitle);
  }
`;
