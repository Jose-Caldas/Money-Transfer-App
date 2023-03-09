import styled from "styled-components";

export const Container = styled.div`
  width: 700px;
  padding: 0 1rem 0 4rem;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 0;

    max-width: 700px;
    margin: 4rem auto;
  }

  header {
    display: flex;
    justify-content: flex-end;

    @media (max-width: 1200px) {
      margin-bottom: 4rem;
    }
  }

  header button {
    width: 54px;
    height: 54px;

    background: var(--white);
    box-shadow: 0px 2px 7px rgba(123, 135, 148, 0.28);
    border-radius: 50%;
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

  .details {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      margin: 0;
    }
  }

  .plan-detail {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;

    h2 {
      color: var(--pink200);
      margin-right: 0.5rem;
      font-size: 20px;
    }

    strong {
      color: var(--pink100);
      font-size: 20px;
    }
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
      font-weight: bold;
    }

    svg {
      background: #ffffff;
      box-shadow: 0px 2px 7px rgba(123, 135, 148, 0.28);
      border-radius: 50%;
      padding: 7px;
      width: 30px;
      height: 30px;
      margin: 0;
    }
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
    gap: 20px;
    margin-bottom: 10px;
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

  .info-content > div {
    display: flex;
    color: ${(props) => props.theme.li};
    align-items: center;

    svg {
      color: ${(props) => props.theme.li};
    }
  }
  strong {
    font-size: 15px;
    color: ${(props) => props.theme.title};
    font-weight: 600;
  }
  button {
    background: var(--pink100);
    border-radius: 4px;
    color: var(--white);
    padding: 15px 0;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 947px) {
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
    padding: 1rem;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 2.5rem 1rem;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border: 2px solid #e4e7eb;
`;
