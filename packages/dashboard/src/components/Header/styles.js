import { rgba } from 'polished';
import { Link } from 'react-router-dom';
import styled, { css, createGlobalStyle } from 'styled-components';

export const Container = styled.header.attrs({ className: 'padding' })`
  display: flex;
  width: 100%;
  top: 0;
  padding-top: 15px;
  padding-bottom: 15px;

  align-items: center;
  justify-content: space-between;
  font-size: 2rem;

  background-color: ${props =>
    props.darked ? props.theme.dark_solid : 'transaparent'};

  button,
  a.button {
    display: flex;
    padding: 6px;
    border-radius: 3px;

    align-items: center;
    justify-content: center;
    transition: background-color 200ms;

    &:hover {
      background-color: ${props => props.theme.grey};
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;

    & > div:nth-child(2) {
      margin-top: 10px;
    }
  }
`;

export const BrandsContainer = styled.div`
  a {
    display: flex;
    align-items: center;

    img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3);
    }

    span {
      margin-left: 8px;
      font-family: 'Platonica';
      font-weight: 600;
      letter-spacing: 1px;
      color: ${props => props.theme.default};
    }
  }
`;

export const BackButton = styled.button`
  margin-right: 2rem;

  svg {
    margin-right: 3px;
  }
`;

export const LoginButton = styled.a.attrs({ className: 'button' })`
  display: flex;
  align-items: center;

  svg {
    margin-left: 6px;
  }
`;

export const UserContainer = styled.button`
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3);
  }

  span {
    margin-left: 1rem;
  }
`;

export const UserLoader = styled.div`
  width: 2.5rem;
  height: 2.5rem;

  border-radius: 50%;
  border: 2px solid transparent;
  animation: spinner 400ms linear infinite;

  border-left: 2px solid ${props => props.theme.default};
  border-top: 2px solid ${props => props.theme.default};

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Dropdown = styled.div`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;

  visibility: hidden;
  font-family: 'Righteous', cursive;
  transition: all 400ms, visibility 600ms;

  ${props =>
    props.open &&
    css`
      z-index: 666;
      visibility: visible;
      background-color: rgba(0, 0, 0, 0.45);
    `}

  & > section {
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0%;
    max-width: 300px;
    padding: 60px 20px;

    top: 0;
    right: ${props => (props.open ? 0 : '-100%')};

    transition: right 300ms;
    background-color: ${props => props.theme.dark_black};
  }

  span.close {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

export const DropdownBrands = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 12.8rem;
    height: 12.8rem;
    border-radius: 50%;
    border: 0.6rem solid ${props => props.theme.default};
  }

  span {
    margin-top: 20px;
    font-size: 3rem;
    font-weight: bold;
  }
`;

export const DropdownItems = styled.section`
  display: flex;
  margin-top: 20px;
  padding: 20px 0;

  font-size: 2.5rem;
  flex-direction: column;
  border-top: 1px solid ${props => rgba(props.theme.grey, 0.6)};

  & > div {
    width: 100%;
    height: 1px;
    margin: 20px 0;
    background-color: ${props => rgba(props.theme.grey, 0.6)};
  }

  & > button svg {
    margin-left: 10px;
  }
`;

export const DropdownLink = styled(Link)`
  position: relative;
  padding: 0 20px;
  transition: color 300ms;

  & + a {
    margin-top: 15px;
  }

  &:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    top: 50%;
    left: 0;

    border-radius: 50%;
    transform: translateY(-50%);
    transition: background-color 300ms;
  }

  ${props =>
    props.active &&
    css`
      color: ${props.theme.default_dark};

      &:before {
        background-color: ${props.theme.default};
      }
    `}

  &:hover {
    color: ${props => props.theme.default_dark};

    &:before {
      background-color: ${props => props.theme.default};
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;
