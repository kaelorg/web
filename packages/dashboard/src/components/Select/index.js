import { useField } from '@unform/core';
import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';

import { Container } from './styles';

const SelectComponent = ({ name, ...rest }) => {
  const selectRef = useRef();
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      path: 'state.value',
      name: fieldName,
      ref: selectRef.current,
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.state.value) return [];
          return ref.state.value.map(option => option.value);
        }

        if (!ref.state.value) return '';
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <>
      <Container
        ref={selectRef}
        defaultValue={defaultValue}
        classNamePrefix="react-select"
        {...rest}
      />

      {error && <span className="error">{error}</span>}
    </>
  );
};

SelectComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SelectComponent;
