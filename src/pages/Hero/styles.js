import styled from "styled-components";

export const Header = styled.header`
  padding: 27px 0;
  background: var(--background);

  div {
    width: 90%;
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    button {
      font-size: 18px;
      color: var(--red-main);
      background: none;
      border: none;

      @media (max-width: 639px) {
        font-size: 16px;
      }
    }

    img {
      width: 91px;
      height: 44px;

      @media (max-width: 639px) {
        width: 81px;
        height: 34px;
      }
    }
  }
`;

export const AboutHero = styled.section`
  width: 90%;
  max-width: 1120px;
  margin: 140px auto 210px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 959px) {
    flex-direction: column;
    justify-content: center;
  }

  img {
    width: 50%;
    max-width: 550px;
    height: 550px;

    @media (max-width: 959px) {
      width: 100%;
      order: 0;
      max-width: 100%;
    }

    @media (max-width: 639px) {
      height: 400px;
    }
  }
`;

export const InfoHero = styled.div`
  width: 50%;
  max-width: 455px;

  @media (max-width: 959px) {
    max-width: 100%;
    margin-top: 40px;
    width: 100%;
    order: 1;
  }
  h1 {
    font-weight: 900;
    font-size: 68px;
    line-height: 75px;
    color: var(--red-main);

    @media (max-width: 639px) {
      font-size: 58px;
    }
  }

  p {
    margin: 36px 0 69px;
    font-size: 22px;
    line-height: 32px;
    color: var(--black-text);

    @media (max-width: 639px) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  > div {
    display: flex;
  }
`;

export const InfoHeroNumber = styled.div`
  strong {
    font-size: 22px;
    line-height: 24px;

    color: var(--black-text);

    @media (max-width: 639px) {
      font-size: 18px;
      line-height: 24px;
    }
  }

  & + div {
    margin-left: 74px;
  }

  div {
    display: flex;
    align-items: center;
    margin-top: 21px;

    img {
      width: 28px;
      height: 31px;
      margin-right: 18px;

      @media (max-width: 639px) {
        width: 26px;
        height: 29px;
        margin-right: 10px;
      }
    }

    span {
      font-size: 22px;
      color: var(--black-text);

      @media (max-width: 639px) {
        font-size: 18px;
      }
    }
  }
`;

export const ComicsHero = styled.section`
  margin: 0 auto 100px;
  width: 90%;

  h2 {
    margin-bottom: 40px;
    font-size: 22px;
    line-height: 24px;
    color: #ff1510;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 20px;
    row-gap: 50px;

    @media screen and (min-width: 640px) and (max-width: 959px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 639px) {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 70px;
    }
  }
`;

export const Comic = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;
