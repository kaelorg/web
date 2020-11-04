import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.input`
  width: 100%;
  height: 60px;
  max-width: 220px;
  padding: 10px;

  color: #fff;
  font-size: 20px;

  border-radius: 6px;
  background-color: ${props => props.theme.dark_solid};
  border: 2px solid ${props => darken(0.05, props.theme.dark_solid)};
`;
