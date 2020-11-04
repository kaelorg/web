import { useField } from '@unform/core';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

import EmojiPicker from '../EmojiPicker';

import { Container } from './styles';

const TextAreaComponent = ({ name, ...rest }) => {
  const inputRef = useRef();
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      path: 'value',
      name: fieldName,
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);

  function handleSelect(emoji) {
    inputRef.current.value += emoji.custom ? emoji.name : emoji.native;
  }

  return (
    <>
      <EmojiPicker handleSelect={handleSelect} {...rest}>
        <Container ref={inputRef} defaultValue={defaultValue} />
      </EmojiPicker>

      {error && <span className="error">{error}</span>}
    </>
  );
};

TextAreaComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TextAreaComponent;
