import styled from "styled-components";

export const CurrancyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SelectContainer = styled.div`
  .select {
    justify-content: space-between;
    outline: none;
    border-radius: 10px;
  }
  .select > div {
    width: 267px;

    margin-bottom: 20px;
  }

  .select span {
    display: flex;
  }

  .select span img {
    height: 30px;
    width: 30px;
    margin: 0 10px 0 40px;
  }
  .select option {
    font-size: 20px;
  }

  .transfer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .transfer-content {
    background-color: #f5f7fa;
    max-width: 267px;
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

  @media screen and (max-width: 768px) {
    .transfer {
      width: 100%;
      flex-direction: column;
      margin-bottom: 2rem;
    }
    .transfer-content {
      width: 100%;
    }
    .select > div {
      justify-content: center;
    }
    .transfer {
      align-items: center;
      /* justify-content: space-between; */
    }
  }
`;
