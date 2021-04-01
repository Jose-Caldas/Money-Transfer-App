import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 25%;
  background-color: #fff;
  padding-top: 3rem;

  header {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  img {
    width: 50px;
    height: 50px;
    margin-left: 50px;
  }

  .info h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1rem 0 0.5rem;
    text-align: center;
  }
  .info h2 {
    color: var(--subTitle);
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 2rem;
    text-align: center;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: none;

    header {
      flex-direction: row;
      align-items: center;
    }
    img {
      margin: 0 20px 0 0;
    }

    .info h1,
    h2 {
      margin: none;
    }
  }
`;

export const Section = styled.div`
  display: flex;
  margin-bottom: 1.5rem;

  h3 {
    margin-left: 18px;
    color: var(--title);
    font-size: 1rem;
    font-weight: 500;
  }
  svg {
    width: 20px;
    height: 20px;
    color: var(--title);
    font-weight: 500;
  }
  button {
    display: flex;
    background: transparent;
    &:focus {
      svg,
      h3 {
        color: var(--pink200);
      }
    }
  }
`;

export const Footer = styled.div`
  margin-top: 10rem;
`;
