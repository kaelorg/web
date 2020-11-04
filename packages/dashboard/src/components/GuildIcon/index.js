import PropTypes from 'prop-types';
import React from 'react';

import { Container } from './styles';

const GuildIconComponent = ({
  nameAcronym,
  iconURL,
  borderColor,
  border,
  ...rest
}) => (
  <Container
    iconURL={iconURL}
    borderColor={borderColor}
    border={border}
    {...rest}
  >
    {!iconURL && <span>{nameAcronym}</span>}
  </Container>
);

GuildIconComponent.propTypes = {
  border: PropTypes.bool,
  iconURL: PropTypes.string,
  borderColor: PropTypes.string,
  nameAcronym: PropTypes.string.isRequired,
};

GuildIconComponent.defaultProps = {
  iconURL: null,
  border: true,
  borderColor: '#36393f',
};

export default GuildIconComponent;
