import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  .currency-select {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 0 auto;
  }

  .select {
    width: 267px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin-bottom: 20px;

    span {
      display: flex;
    }

    span img {
      height: 30px;
      width: 30px;
      margin: 0 10px 0 40px;
    }

    option {
      font-size: 20px;
    }
  }

  .currency-transfer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .transfer {
    display: flex;
    flex-direction: column;
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
    margin-top: 20px;
  }

  .refresh {
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: none;
    margin: 80px auto;
    cursor: pointer;
  }

  .refresh svg {
    color: var(--pink200);
    width: 100%;
    font-size: 30px;
    text-align: center;
    justify-content: center;
  }

  .transfer input {
    width: 80%;
    height: 100%;
    border: none;
    text-align: center;
    background-color: #f5f7fa;
    outline: none;
    color: ${(props) => props.theme.title};

    /* &:hover,
    &:focus {
      box-shadow: 0 0 5px 1px pink;
    } */
  }

  small {
    color: var(--subTitle);
    font-size: 14px;
    display: flex;
    justify-content: start;
    margin-bottom: 8px;
  }

  @media (max-width: 768px) {
    .currency-select {
      flex-direction: column;
    }
    .refresh {
      display: flex;
      justify-content: center;
      margin: 20px auto !important;
    }

    .select,
    .transfer {
      width: 267px;
    }
  }

  @media (max-width: 1200px) {
    .select,
    .transfer {
      width: 100%;
    }
    .refresh {
      margin: 80px 50px;
    }
    .currency-select {
      margin: 4rem 0;
    }
  }
`;
