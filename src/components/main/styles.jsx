import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: 100vh;
  background-color: #fff;
  padding-top: 3rem;

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
  select {
    background: #f5f7fa;
    width: 267px;
    height: 53px;
    border: none;
    border-radius: 8px;
    margin-top: 61px;
    font-size: 1rem;
    margin-right: 70px;
  }
`;
