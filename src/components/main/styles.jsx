import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  /* height: 100vh; */
  padding-top: 3rem;
  background: #fff;

  h1 {
    font-size: 30px;
    color: var(--title);
    font-weight: 500;
    margin-bottom: 14px;
  }
  .content {
    display: flex;
    align-items: center;

    h2 {
      color: var(--pink200);
      margin-right: 12px;
      font-size: 30px;
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
    margin-top: 2rem;
  }
  h1 {
    font-size: 24px;
    color: var(--title);
    font-weight: 500;
  }
  h2 {
    color: var(--title);
    font-size: 18px;
    font-weight: 400;
    margin-right: 10px;
  }
  .choose > div {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
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
    height: 250px;
  }

  label {
    display: flex;
    border: 2px solid #f5f7fa;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
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
  justify-content: space-between;
`;

export const SelectContainer = styled.div`
  border: none;
  border-radius: 8px;
  margin-top: 1rem;
  font-size: 1rem;

  .transfer {
    /* background-color: red; */
  }
  .transfer > div {
    display: flex;
    justify-content: center;
    flex-direction: column;

    border-radius: 8px;
  }
  select {
    width: 267px;
    height: 53px;
    display: flex;
    justify-content: flex-end;
    background-color: #f5f7fa;
    margin-bottom: 20px;
    border: none;
    outline: none;
    padding: 10px;
  }
  button {
    color: var(--pink200);
    margin: 40px 25px 0 25px;
    background-color: transparent;
    font-size: 22px;
    background-color: green;
  }
  .transfer input {
    background-color: #f5f7fa;
    width: 267px;
    height: 128px;
    border: none;
    font-size: 30px;
    color: var(--title);
    font-weight: 600;
    text-align: center;
    border-radius: 8px;
  }

  small {
    color: var(--subTitle);
    font-size: 14px;
    display: flex;
    justify-content: start;
  }
`;
