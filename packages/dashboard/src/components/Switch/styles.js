import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  button {
    display: flex;
    width: 7.2rem;
    height: 3.6rem;
    align-items: center;

    border-radius: 100px;
    background-color: #888888;
    transition: background-color 200ms;

    span {
      width: 2.4rem;
      height: 2.4rem;
      position: relative;
      left: 0.6rem;
      background-color: #fff;
      border-radius: 50%;
      transition: left 300ms;
    }

    ${props => {
      return (
        props.active &&
        css`
          background-color: ${props.theme.default};

          span {
            left: 4.2rem;
          }
        `
      );
    }}
  }
`;

export const LoadingContainer = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 10px;

  border-radius: 50%;
  border: 2px solid transparent;
  border-top: 2px solid ${props => props.theme.default};
  border-left: 2px solid ${props => props.theme.default};
  animation: spinner 500ms linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
