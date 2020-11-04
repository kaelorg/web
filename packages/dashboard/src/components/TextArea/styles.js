import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.textarea.attrs({ className: 'scroll' })`
  resize: none;
  width: 100%;
  height: 100%;
  min-height: 100px;
  padding: 10px;

  color: #fff;
  border-radius: 4px;
  background-color: ${props => props.theme.dark_solid};
  border: 2px solid ${props => darken(0.05, props.theme.dark_solid)};

  @media (max-width: 800px) {
    height: 100px;
  }
`;
