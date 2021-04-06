import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
  background: #fff;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 5rem;

    header {
    }
  }

  header {
    display: flex;
    flex-direction: column;
  }
  header h1 {
    font-size: 20px;
    color: var(--title);
    font-weight: 500;
    margin-bottom: 10px;
  }
  .header-content {
    display: flex;
    align-items: center;

    h2 {
      color: var(--pink200);
      margin-right: 12px;
      font-size: 20px;
    }
    span {
      color: var(--subTitle);
      font-weight: 400;
      font-size: 1rem;
    }
  }

  .choose {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
  }
  h1 {
    font-size: 24px;
    color: var(--title);
    font-weight: 500;
  }
  h4 {
    color: var(--title);
    font-size: 18px;
    font-weight: 400;
    margin-right: 10px;
  }

  .choose > div {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  .choose svg {
    font-size: 18px;
    margin-left: 13px;
  }
  .options {
    width: 100%;

    padding: 10px;
    border-radius: 4px;
    margin-bottom: 1rem;
  }
  .options {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
  }

  label {
    display: flex;
    border: 2px solid #f5f7fa;
    padding: 15px;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 10px;
  }

  .opt {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .opt > div {
    display: flex;
    align-items: center;

    svg {
      margin-right: 20px;
      width: 20px;
      height: 20px;
      color: white;
      border: 1px solid gray;
      border-radius: 100%;
    }
  }

  @media (max-width: 768px) {
    .choose > div {
      flex-direction: column;
      margin-bottom: 0.5rem;
    }

    .option-content {
      margin-bottom: 2rem;
      background-color: blue;
    }
  }

  #radio1,
  #radio2,
  #radio3 {
    display: none;
  }

  input:checked + label {
    background: #fff6f9;
    border: 2px solid #ff8cba;
  }
`;

export const CurrancyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SelectContainer = styled.div`
  @media screen and (max-width: 768px) {
    .transfer {
      flex-direction: column;
      margin-bottom: 2rem;
    }
    .select > div {
      justify-content: center;
    }
    .transfer {
      align-items: center;
      /* justify-content: space-between; */
    }
  }

  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 8px;
  margin-top: 1rem;
  font-size: 1rem;

  .select {
    justify-content: space-between;
  }
  .select > div {
    width: 267px;

    margin-bottom: 20px;
  }

  .select span img {
    height: 30px;
    margin: 0 10px 0 40px;
  }

  .transfer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .transfer-content {
    background-color: #f5f7fa;
    width: 267px;
    height: 128px;
    border: none;
    font-size: 30px;
    color: var(--title);
    font-weight: 600;
    text-align: center;
    border-radius: 8px;
    padding: 10px;
  }

  .transfer button {
    background-color: transparent;
    font-size: 30px;
    color: var(--pink200);
  }

  .transfer input {
    width: 80%;
    height: 80%;
    border: none;
    background-color: #f5f7fa;
  }

  small {
    color: var(--subTitle);
    font-size: 14px;
    display: flex;
    justify-content: start;
  }
`;
