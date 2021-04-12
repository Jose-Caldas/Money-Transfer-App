import styled from "styled-components";

export const Container = styled.div`
  min-width: 360px;
  margin: 0 auto;
  height: 80vh;
  padding-left: 21px;

  background-color: #fff;

  header {
    display: flex;
    justify-content: flex-end;
    padding: 0 1rem;
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

  .aside-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40px;
    width: 100%;
    height: 100%;
    margin: 4rem 0;
  }

  .info {
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 350px;
    border: 2px solid #e4e7eb;
    padding: 1rem;
    border-radius: 4px;
  }

  .info-content {
    display: flex;
    justify-content: space-between;
  }

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

  @media (min-width: 1200px) {
    width: 350px;
    .aside-container {
      grid-template-columns: 1fr;
      grid-column-gap: none;
      margin-bottom: 0;
    }
    .info {
      padding: 40px;
      border-top: none;
    }
  }
  @media (max-width: 890px) {
    .aside-container {
      grid-template-columns: 1fr;
      grid-column-gap: none;
      margin-bottom: 0;
    }
    .info {
      padding: 40px;
      border-top: none;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;

  @media (min-width: 1200px) {
    padding: 2.5rem;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 2.5rem 1rem;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border: 2px solid #e4e7eb;
`;
