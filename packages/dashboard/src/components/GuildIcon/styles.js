import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 15rem;
  height: 15rem;

  align-items: center;
  justify-content: center;

  border-radius: 50%;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.3);
  background-color: ${props => props.theme.dark_solid};

  ${props =>
    props.iconURL &&
    css`
      background: url(${props.iconURL}) no-repeat;
      background-position: 50% 50%;
      background-size: cover;
    `}
  ${props =>
    props.border &&
    css`
      border: 2px solid ${props.borderColor};
    `}
`;
