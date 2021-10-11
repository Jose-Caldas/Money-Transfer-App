import styled from "styled-components";

export const Container = styled.div`
  display: none;
  ul {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #1f2933;
    padding: 20px;
  }

  li h1 {
    font-size: 16px;
    color: #1f2933;
  }

  @media (max-width: 1200px) {
    display: block;
    background-color: #f5f7fa;
  }
  @media (max-width: 890px) {
    display: none;
  }
  @media (max-width: 768px) {
    margin-bottom: 0;
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
