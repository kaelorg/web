import { rgba } from 'polished';
import styled, { css } from 'styled-components';

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #f04747;
`;

const messageColors = {
  default: '#fff',
  error: '#f04747',
  success: '#78e5d5',
};

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > p {
    margin-bottom: 3px;
    align-self: flex-end;
    color: #f04747;
  }

  & > a {
    margin-top: 3px;
    align-self: flex-end;
    transition: color 200ms;

    &:hover {
      color: #1e91d6;
    }
  }
`;

export const DropContainer = styled.div`
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
  transition: height 0.2s ease;
  border: 2px dashed ${props => rgba(props.theme.dark_solid, 0.6)};

  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`;

export const UploadMessage = styled.p`
  padding: 15px;
  text-align: center;
  color: ${props => messageColors[props.type || 'default']};
`;
