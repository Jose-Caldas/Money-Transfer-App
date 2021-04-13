import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 22px;

  // =============================== Responsive =====================================

  @media (max-width: 1200px) {
    display: none;
  }
`;
// ===================================================================================

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 60px;
    height: 60px;
  }

  .profile-info {
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      font-size: 24px;
      font-weight: 600;

      color: ${(props) => props.theme.title};

      margin: 19px 0 13px 0;
    }

    small {
      font-size: 14px;
      color: ${(props) => props.theme.small};
      margin-bottom: 56px;
    }
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ul li {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    font-size: 16px;
    color: ${(props) => props.theme.li};
    cursor: pointer;
    position: relative;

    &:hover {
      color: var(--pink200);
      .item-select {
        background: var(--pink200);
      }
    }
  }

  .item-select {
    width: 3px;
    height: 40px;
    background: transparent;
    position: absolute;
    left: -60px;
  }

  ul li svg {
    width: 24px;
    height: 24px;
    margin-right: 19px;
  }

  footer {
    color: var(--title);
    margin-top: 70px;
    font-size: 16px;
  }

  .item-select-footer {
    width: 3px;
    height: 40px;
    background: transparent;
    position: absolute;
    left: -60px;
  }

  footer li {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      color: var(--pink200);
      .item-select-footer {
        background: var(--pink200);
      }
    }
  }
`;
