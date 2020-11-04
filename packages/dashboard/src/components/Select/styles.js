import { darken, lighten } from 'polished';
import ReactSelect from 'react-select';
import styled from 'styled-components';

export const Container = styled(ReactSelect)`
  position: relative;

  &,
  * {
    color: #fff !important;
    border: none;
  }

  & > div {
    background-color: ${props => props.theme.dark_solid};
    border: 2px solid ${props => darken(0.05, props.theme.dark_solid)} !important;
  }

  .react-select__menu {
    z-index: 2;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.3);
  }

  .react-select__option--is-focused,
  .react-select__option--is-focused:active {
    background-color: ${props => lighten(0.03, props.theme.dark_solid)};
  }

  .react-select__menu-list {
    &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.grey};
    }

    &::-webkit-scrollbar {
      width: 8px;
      margin: 3px;
      padding: 10px;
      background-color: ${props => props.theme.grey_solid};
    }
  }
`;
