import styled from "styled-components";

export const CurrancyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: none;
`;

export const SelectContainer = styled.div`
  flex: 1 1 0;

  .select {
    width: 100%;
    justify-content: space-between;
    outline: none;
    border-radius: 10px;
  }

  

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
    width: 100%;
  }

  .transfer-content {
    background-color: #f5f7fa;
   
    width: 100%;
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
    font-size: 30px;

    background: transparent;
    margin: 30px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
  }

  .refresh svg {
    color: var(--pink200);
  }

  .transfer input {
    width: 100%;
    height: 100%;
    border: none;
    text-align:center;
   
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
   
  
`;
