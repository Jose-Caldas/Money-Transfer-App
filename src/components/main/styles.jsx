import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
  background: #fff;
  justify-content: space-between;

  .profile {
    display: flex;
    align-items: center;
    position: relative;
    display: none;
  }

  header img {
    width: 60px;
    height: 60px;
    left: 0;
    top: 20px;
    position: absolute;
  }

  header .info {
    display: flex;
    flex-direction: column;
    padding-left: 90px;
  }

  header .info strong {
    font-size: 22px;
    font-weight: 600;
    color: var(--title);
    margin: 19px 0 13px 0;
  }

  header .info small {
    font-size: 16px;
    color: var(--subTitle);
    margin-bottom: 56px;
  }

  @media (max-width: 1024px) {
    padding: 1rem;
    margin: 5rem 0;
    margin: 5rem auto;

    header {
    }
  }

  @media (max-width: 890px) {
    .profile {
      display: block;
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
