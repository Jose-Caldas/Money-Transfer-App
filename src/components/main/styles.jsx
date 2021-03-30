import styled from "styled-components";

export const Container = styled.div`
  /* width: 40%; */
  height: 100vh;
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
  .select {
    display: flex;
    justify-content: space-between;
  }
  select {
    background: #f5f7fa;
    width: 267px;
    height: 53px;
    border: none;
    border-radius: 8px;
    margin-top: 61px;
    font-size: 1rem;
  }
  .transfer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .transfer > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 267px;
    height: 128px;
    background-color: #f5f7fa;
    margin-top: 28px;
    border-radius: 8px;
    padding: 20px;
  }
  button {
    color: var(--pink200);
    margin: 40px 25px 0 25px;
    background-color: transparent;
    font-size: 22px;
  }
  .transfer input {
    height: 70%;
    background-color: #f5f7fa;
    border: none;
    font-size: 30px;
    color: var(--title);
    font-weight: 600;
  }

  small {
    color: var(--subTitle);
    font-size: 14px;
    display: flex;
    justify-content: start;
  }
  .choose {
    display: flex;
    justify-content: space-between;
    margin-top: 3.75rem;
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
    border: 2px solid #ff8cba;
    padding: 10px;
    border-radius: 4px;
    background: #fff6f9;
  }
  label {
    display: flex;
  }

  .opt {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #rd {
    width: 20px;
    height: 20px;
    color: var(--pink200);
    margin: 20px 20px 20px 0;
  }
`;
