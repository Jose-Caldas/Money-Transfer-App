import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  border: 2px solid var(--gray400);
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;

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
  }

  .center {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .checkbox {
    width: 20px;
    height: 20px;
    border: 1px solid #616e7c;
    border-radius: 50%;
    margin-right: 15px;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;
