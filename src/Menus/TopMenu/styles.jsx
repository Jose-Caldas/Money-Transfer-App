import styled from "styled-components";

export const Wrapper = styled.div`
  width: 0;

  visibility: hidden;

  margin: 0 auto;

  ul {
    background: #446677;
    width: 100%;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    padding: 20px;
  }

  li h1 {
    font-size: 16px;
    color: #fff;
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
    align-items: center;
  }
`;
