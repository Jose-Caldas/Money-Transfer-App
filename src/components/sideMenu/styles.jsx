import styled from "styled-components";

export const Container = styled.div`
  width: 30%;
  height: 100vh;
  background-color: #fff;

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 4.5rem;
  }
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1.18rem 0 0.81rem;
  }
  h2 {
    color: var(--subTitle);
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 3.5rem;
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2.8rem;
  h3 {
    margin-left: 18px;
    color: var(--title);
  }
  svg {
    width: 30px;
    height: 30px;
    color: var(--title);
  }
`;
