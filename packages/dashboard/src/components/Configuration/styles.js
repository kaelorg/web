import { darken, lighten, rgba } from 'polished';
import styled, { createGlobalStyle, css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100%;
  padding: 20px 15px;

  align-items: center;
  justify-content: space-between;

  border-radius: 8px;
  border: 2px solid ${props => darken(0.05, props.theme.dark_solid)};
  background-color: ${props => props.theme.dark_solid};
`;

export const TextsContainer = styled.div`
  h3 {
    font-size: 1.8rem;
  }

  p {
    margin-top: 6px;
    font-size: 1.4rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;

  & > button {
    display: flex;
    margin-right: 10px;
    padding: 8px;

    border-radius: 50%;
    border: 1px solid ${props => rgba(props.theme.grey, 0.3)};
    color: ${props => props.theme.grey};

    svg {
      stroke-width: 3;
    }
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 400ms;

  ${props =>
    props.open &&
    css`
      z-index: 999;
      opacity: 1;
      visibility: visible;
      background-color: rgba(0, 0, 0, 0.45);

      & > div {
        transform: translate(-50%, -50%) scale(1);
      }
    `}
`;

export const ModalContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;

  max-width: 600px;
  max-height: 500px;
  transform: translate(-50%, -50%) scale(0.2);

  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  transition: transform 300ms;
  background-color: ${props => props.theme.dark};

  & > footer {
    display: flex;
    padding: 15px 20px;

    align-items: center;
    justify-content: flex-end;

    box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.2);
    background-color: ${props => lighten(0.03, props.theme.dark_solid)};

    button {
      &:nth-child(1) {
        padding: 12px 20px;
        border-radius: 3px;
      }

      & + button {
        margin-left: 20px;
      }
    }
  }

  & > header {
    display: flex;
    padding: 20px;

    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.dark_solid};

    h3 {
      font-size: 2.2rem;
    }

    button {
      display: flex;
      padding: 8px;
      border-radius: 4px;
      transition: background-color 200ms;
      border: 1px solid ${props => rgba(props.theme.grey, 0.3)};

      &:hover {
        background-color: ${props => rgba(props.theme.grey, 0.3)};
      }
    }
  }

  @media (max-width: 600px) {
    max-height: 100%;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;
