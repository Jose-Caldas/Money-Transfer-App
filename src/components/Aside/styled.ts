import styled from "styled-components";

export const Container = styled.div`
  min-width: 381px;
  padding-left: 49px;

  background-color: var(--white);
  @media (max-width: 1200px) {
    padding-left: 0;
    padding: 21px;

    .aside-container {
      max-width: 600px;
      margin: 4rem auto;
    }
  }

  header {
    display: flex;
    justify-content: flex-end;
    padding: 0 1rem;
  }

  header button {
    width: 54px;
    height: 54px;

    background: var(--white);
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
    margin-bottom: 20px;
  }

  .aside-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .info {
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 350px;
    border: 2px solid #e4e7eb;
    padding: 1rem;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top: none;
  }

  .info-content {
    display: flex;
    justify-content: space-between;
  }

  svg {
    color: var(--darksvg);
    width: 20px;
    height: 20px;
    margin-right: 15px;
  }

  h3 {
    font-size: 17px;
    color: var(--gray);
    font-weight: 400;
  }

  .content {
    display: flex;
    justify-content: space-around;
    align-items: center;

    h2 {
      font-size: 18px;
      margin-bottom: 10px;
      color: ${(props) => props.theme.title};
      margin: 0;
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
    color: ${(props) => props.theme.li};
    align-items: center;

    svg {
      color: ${(props) => props.theme.li};
    }
  }
  strong {
    font-size: 18px;
    color: ${(props) => props.theme.title};
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

  @media (max-width: 890px) {
    .aside-container {
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
