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
    }

    img {
      width: 91px;
      height: 44px;
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

  img {
    width: 50%;
    max-width: 550px;
    height: 550px;
  }
`;

export const InfoHero = styled.div`
  width: 50%;
  max-width: 455px;
  h1 {
    font-weight: 900;
    font-size: 68px;
    line-height: 75px;
    color: var(--red-main);
  }

  p {
    margin: 36px 0 69px;
    font-size: 22px;
    line-height: 32px;
    color: var(--black-text);
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
    }

    span {
      font-size: 22px;
      color: var(--black-text);
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
    grid-template-columns: repeat(6, 170px);
    column-gap: 20px;
    row-gap: 50px;
  }
`;

export const Comic = styled.div`
  img {
    width: 170px;
    height: 258.06px;
  }
`;
