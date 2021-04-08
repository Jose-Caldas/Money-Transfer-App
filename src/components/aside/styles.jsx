import styled from "styled-components";

export const Container = styled.div`
  max-width: 381px;
  @media (min-width: 1015px) {
    width: 100%;
    padding: none;

    h1 {
      text-align: center;
    }
  }

  background-color: #fff;

  header {
    display: flex;
    justify-content: flex-end;
  }

  header button {
    width: 54px;
    height: 54px;

    background: #ffffff;
    box-shadow: 0px 2px 7px rgba(123, 135, 148, 0.28);
    border-radius: 100%;
    padding: 15px;
    margin-left: 2rem;
    &:hover {
      box-shadow: 0 0 5px 4px rgba(123, 135, 148, 0.28);
    }

    svg {
      width: 20px;
      height: 20px;
      color: var(--title);
    }
  }
  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 350px;
    border: 2px solid #e4e7eb;
    border-top: none;
    padding: 1rem;
  }

  @media (min-width: 1015px) {
    .info {
      padding: 40px;
    }
  }

  .info-content {
    display: flex;
    justify-content: space-between;

    svg {
      color: #52606d;
      width: 20px;
      height: 20px;
      margin-right: 15px;
    }

    h3 {
      font-size: 17px;
      color: #3e4c59;
      font-weight: 400;
    }
  }

  .content {
    display: flex;
    justify-content: space-around;
    align-items: center;

    h2 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    img {
      margin-right: 1rem;
    }
    svg {
      background: #ffffff;
      box-shadow: 0px 2px 7px rgba(123, 135, 148, 0.28);
      border-radius: 100%;
      padding: 7px;
      width: 30px;
      height: 30px;
    }
  }

  .info-content > div {
    display: flex;
    color: #3e4c59;
    align-items: center;
  }
  strong {
    font-size: 18px;
    color: var(--title);
    font-weight: 600;
  }
  button {
    background: #f364a2;
    border-radius: 4px;
    color: var(--white);
    padding: 15px 0;
    font-size: 20px;
    font-weight: 500;
    &:hover {
      box-shadow: 0 0 1px 4px var(--pink100);
    }
  }

  /* .aside-container {
      background: yellow;

      display: flex;
      align-items: center;
      justify-content: space-between;
    } */
`;

export const Wrapper = styled.div`
  display: flex;

  @media (min-width: 1015px) {
    padding: 2.5rem;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 220px;
  margin-top: 4rem;
  padding: 2.5rem 1rem;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border: 2px solid #e4e7eb;
`;
