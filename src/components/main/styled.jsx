import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 30px;
    color: ${(props) => props.theme.title};
    font-weight: 500;
    margin-bottom: 14px;
  }

  @media (max-width: 1200px) {
    margin-top: 10rem;
    margin-bottom: 5rem;
    padding: 0 21px;
    margin: 4rem auto;
    width: 100%;
  }

  @media (max-width: 768px) {
    margin-top: 10rem;
  }

  header {
    display: flex;
    align-items: flex-end;
    margin-bottom: 20px;

    h2 {
      align-items: flex-end;
      color: var(--pink200);
      margin-right: 12px;
      font-size: 30px;
      font-weight: 700;
      margin-bottom: 0;
    }

    h3 {
      color: ${(props) => props.theme.small};
      font-weight: 400;
      font-size: 16px;
      margin-bottom: 7px;
    }
  }
`;

export const ChoosePlan = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 1rem;

  h1 {
    font-size: 24px;
    color: ${(props) => props.theme.title};
    font-weight: 500;
    margin: 0;
  }
  h4 {
    color: ${(props) => props.theme.title};
    font-size: 18px;
    font-weight: 400;
    margin-right: 10px;
  }
  .date {
    display: flex;
    align-items: center;

    h4 {
      margin: 0;
      margin-right: 10px;
    }

    svg {
      font-size: 18px;
      margin-left: 13px;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 2rem 0;

    h1 {
      margin-bottom: 2rem;
    }
  }
`;
