import { useField } from '@unform/core';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

import { Container } from './styles';

const InputComponent = ({ name, ...rest }) => {
  const inputRef = useRef();
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      path: 'value',
      name: fieldName,
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container ref={inputRef} defaultValue={defaultValue} {...rest} />
      {error && <span className="error">{error}</span>}
    </>
  );
};

InputComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default InputComponent;
