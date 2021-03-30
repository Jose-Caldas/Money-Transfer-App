import styled from "styled-components";

export const Container = styled.div`
  width: 25%;
  height: 100vh;
  background-color: #fff;

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
  }
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1rem 0 0.5rem;
  }
  h2 {
    color: var(--subTitle);
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 2rem;
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2.8rem;
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
  }
`;

export const Footer = styled.div`
  margin-top: 5rem;
`;
