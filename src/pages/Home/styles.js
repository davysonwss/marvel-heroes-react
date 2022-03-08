import styled from "styled-components";

export const Header = styled.header`
  width: 90%;
  margin: 80px auto 115px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 261px;
    height: 127px;
  }

  div {
    max-width: 778px;
    margin-top: 48px;
    text-align: center;

    h1 {
      margin-bottom: 25px;
      font-weight: 600;
      font-size: 38px;
      text-transform: uppercase;

      @media (max-width: 639px) {
        font-size: 28px;
      }
    }

    p {
      font-size: 22px;
      line-height: 24px;

      @media (max-width: 639px) {
        font-size: 18px;
      }
    }
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    order: 1;
  }

  label {
    margin: 0 23px;
    color: var(--red-main);
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;

    @media (max-width: 639px) {
      font-size: 16px;
    }
  }
`;

export const FilterOrder = styled.input`
  cursor: pointer;
  appearance: none;
  width: 20px;
  height: 20px;
  outline: none;
  border: 2px solid var(--red-main);
  border-radius: 3px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    position: absolute;
    height: 9px;
    width: 4px;
    background: none;
    border-right: 2px solid var(--red-main);
    border-bottom: 2px solid var(--red-main);
    opacity: 0;
    transition: all 600ms ease-in-out;
    transform: rotate(45deg);
    top: 1px;
  }

  &:checked:before {
    opacity: 1;
  }

  &:focus {
    box-shadow: 0 0 3px var(--red-main);
  }
`;

export const Search = styled.div`
  width: 50%;
  max-width: 550px;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 639px) {
    order: 0;
    margin-bottom: 30px;
    width: 90%;
  }

  input[type="text"] {
    width: 100%;
    padding: 20px 30px;
    font-size: 18px;
    font-weight: 400;
    color: var(--red-main);
    background: var(--background);
    border-radius: 100px;
    border: none;
    outline: 1px solid var(--red-main);

    &::placeholder {
      color: var(--red-main);
    }

    @media (max-width: 639px) {
      padding: 20px;
    }
  }

  ion-icon {
    display: none;
    position: absolute;
    right: 0;
    padding: 18.3px;
    font-size: 25px;
    color: #fff;
    background: var(--red-main);
    border-radius: 50%;
  }
`;

export const HeroInfoQuantity = styled.h2`
  width: 90%;
  margin: 54px auto 81px;
  font-weight: 600;
  font-size: 18px;
  color: var(--gray);
  @media (max-width: 639px) {
    text-align: center;
  }

  span {
    font-weight: 700;
    text-decoration: underline;
  }
`;

export const Heroes = styled.section`
  width: 90%;
  margin: 0 auto 200px;
  max-width: 1120px;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 30px;

  @media (max-width: 959px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 639px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 40px;
  }

  @media (max-width: 500px) {
    justify-items: center;
    grid-template-columns: 1fr;
    row-gap: 40px;
  }
`;

export const Hero = styled.div`
  width: 100%;
  max-width: 400px;
  border-bottom: none;
  padding-bottom: 0;

  @media (max-width: 639px) {
    padding-bottom: 5px;
    border-bottom: 1px solid var(--red-main);
  }

  a {
    text-decoration: none;
    img {
      width: 100%;
      height: 265px;
      border-bottom: 3px solid var(--red-main);

      @media (max-width: 320px) {
        height: 300px;
      }
    }
    p {
      color: var(--black-text);
      margin-top: 20px;
    }
  }
`;
