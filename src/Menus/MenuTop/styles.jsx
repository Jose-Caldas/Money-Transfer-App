import styled from "styled-components";

export const Wrapper = styled.div`
  width: 0;

  visibility: hidden;

  ul {
    width: 100%;

    position: fixed;
    top: 30px;
    left: 0;

    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px;
  }

  li h1 {
    font-size: 16px;
    color: var(--title);
  }

  @media (max-width: 1024px) {
    visibility: visible;
  }
  @media (max-width: 890px) {
    visibility: hidden;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .info {
    display: flex;
    flex-direction: column;
  }
`;
