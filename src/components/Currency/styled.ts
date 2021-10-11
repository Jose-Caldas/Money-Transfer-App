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
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: none;
    margin: 80px 15px;
    cursor: pointer;
    padding: 0;
  }

  .refresh svg {
    background: transparent;
    border: none;
    color: var(--pink200);
    width: 100%;
    font-size: 30px;
    text-align: center;
    justify-content: center;
  }

  .transfer input {
    width: 100%;
    height: 100%;
    border: none;
    text-align: center;
    background-color: #f5f7fa;
    outline: none;
    color: ${(props) => props.theme.title};
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

      @media (max-width: 1200px) {
        margin: 20px auto !important;
        margin: 0;
        padding: 0;
      }
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
      padding: 0;
    }
    .currency-select {
      margin: 4rem 0;
    }
  }
`;
