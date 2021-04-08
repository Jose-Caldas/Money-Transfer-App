import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    visibility: hidden;
    width: 0;
    height: 0;
  }

  header {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }

  .navigation {
  }
  header img {
    width: 60px;
    height: 60px;
    margin: 0 auto;
  }

  header .info {
    display: flex;
    align-items: center;
    flex-direction: column;
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

  ul {
  }

  .navigation ul li {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    font-size: 16px;
    color: var(--title);
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

  /* =============================responsive======================================== */

  @media (max-width: 1024px) {
    width: 100%;
    display: flex;

    header {
      /* width: 200px; */
      display: flex;
      /* justify-content: center; */
    }

    header .info {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    header .info small {
      margin-bottom: 20px;
    }
    header .info strong {
      font-size: 24px;
      font-weight: 600;
      color: var(--title);
    }

    ul {
      width: 100%;
      display: flex;
      justify-content: center;
      display: flex;
      flex-wrap: wrap;
    }

    ul li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-right: 30px;
    }

    ul li svg {
      margin-right: 10px;
    }
    footer {
      color: var(--title);
      margin: none;
      font-size: 16px;
      margin-top: 0;
    }
    @media (max-width: 768px) {
      .navigation {
        display: none;
      }
      footer {
        display: none;
      }
    }
  }
`;
