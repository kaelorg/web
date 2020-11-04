import { darken } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.section`
  cursor: pointer;
  display: flex;
  width: 100%;
  padding: 15px;
  flex-direction: column;

  border-radius: 4px;
  border: 2px solid ${props => darken(0.05, props.theme.dark_solid)};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2rem;

    svg {
      stroke-width: 4;
      transition: transform 300ms;
      transform: rotate(${props => (props.open ? '180deg' : '0')});
    }
  }
`;

export const Content = styled.div`
  height: 0;
  opacity: 0;

  border-top: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 200ms;

  p {
    font-weight: 600 !important;
  }

  ${props =>
    props.open &&
    css`
      height: 100%;
      opacity: 1;

      margin-top: 15px;
      padding-top: 15px;
    `}
`;
