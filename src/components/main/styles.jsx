import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
  background: #fff;
  justify-content: space-between;

  @media (max-width: 1024px) {
    padding: 1rem;
    margin: 5rem 0;

    header {
    }
  }

  header {
    display: flex;
    flex-direction: column;
  }
  header h1 {
    font-size: 20px;
    color: var(--title);
    font-weight: 500;
    margin-bottom: 10px;
  }
  .header-content {
    display: flex;
    align-items: center;

    h2 {
      color: var(--pink200);
      margin-right: 12px;
      font-size: 20px;
    }
    span {
      color: var(--subTitle);
      font-weight: 400;
      font-size: 1rem;
    }
  }

  .choose {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 24px;
    color: var(--title);
    font-weight: 500;
  }
  h4 {
    color: var(--title);
    font-size: 18px;
    font-weight: 400;
    margin-right: 10px;
  }

  .choose > div {
    display: flex;
    align-items: center;
  }
  .choose svg {
    font-size: 18px;
    margin-left: 13px;
  }

  @media (max-width: 768px) {
    .choose {
      flex-direction: column;
    }
  }
`;
