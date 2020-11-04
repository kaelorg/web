import styled from 'styled-components';

export const PickerButton = styled.button`
  position: absolute;
  top: 8px;
  right: 15px;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const PickerContainer = styled.section`
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 10px;

  span {
    cursor: pointer !important;
  }
`;
