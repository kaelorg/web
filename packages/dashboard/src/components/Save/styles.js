import styled, { css } from 'styled-components';

export const Container = styled.div.attrs({ className: 'padding' })`
  position: fixed;
  z-index: 444;
  width: 100%;
  opacity: 0;
  left: 0;
  bottom: -100%;
  transition: bottom 300ms, opacity 200ms;

  p {
    color: #fff !important;
  }

  button + button {
    margin-left: 20px;
  }

  & > section {
    display: flex;
    padding: 12px 20px;

    align-items: center;
    justify-content: space-between;

    border-radius: 4px;
    background-color: rgba(30, 143, 214, 0.7);
    box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.2);

    @media (max-width: 500px) {
      flex-direction: column;

      p {
        margin-bottom: 10px;
      }
    }
  }

  ${props =>
    props.open &&
    css`
      bottom: 20px;
      opacity: 1;
    `}
`;

export const SaveButton = styled.button`
  position: relative;
  padding: 12px 18px;
  border-radius: 4px;
  background-color: #50c790;

  div {
    display: none;
  }

  ${props =>
    props.loading &&
    css`
      cursor: not-allowed;

      & > span {
        opacity: 0;
      }

      div {
        display: block;
      }

      background-color: #42b881;
    `}
`;

export const ResetButton = styled.button`
  border-bottom: 1px solid transparent;
  transition: border-color 200ms;

  &:hover {
    border-color: #fff;
  }
`;

export const LoadingContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    opacity: 1;
    border: 4px solid #fff;
    border-radius: 50%;
    animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

    &:nth-child(2) {
      animation-delay: -0.5s;
    }
  }

  @keyframes ripple {
    0% {
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      width: 35px;
      height: 35px;
      opacity: 0;
    }
  }
`;
