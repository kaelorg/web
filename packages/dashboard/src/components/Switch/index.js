import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Container, LoadingContainer } from './styles';

const SwitchComponent = ({ checked, handleChange, ...rest }) => {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    if (!loading) {
      setLoading(true);
      await handleChange(!checked);
      setLoading(false);
    }
  }

  return (
    <Container active={checked} {...rest}>
      {loading && (
        <LoadingContainer>
          <span />
          <span />
          <span />
        </LoadingContainer>
      )}

      <button type="button" className="checkbox" onClick={handleClick}>
        <span />
      </button>
    </Container>
  );
};

SwitchComponent.propTypes = {
  checked: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
};

SwitchComponent.defaultProps = {
  checked: false,
};

export default SwitchComponent;
