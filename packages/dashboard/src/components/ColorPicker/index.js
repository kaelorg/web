import { useField, FormContext } from '@unform/core';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState, useContext } from 'react';
import { ChromePicker } from 'react-color';
import { FiCheck } from 'react-icons/fi';
import { IoMdColorFilter } from 'react-icons/io';

import { pickerColors } from '@app/config/dashboard';

import {
  Container,
  Reset,
  PickerContent,
  PickerContainer,
  ColorsContainer,
  Color,
} from './styles';

const ColorPickerComponent = ({ name }) => {
  // Refs
  const ref = useRef();
  const pickerRef = useRef();

  const [color, setColor] = useState();
  const [open, setOpen] = useState(false);
  const [change, setChange] = useState(false);

  // Form
  const { unregisterField } = useContext(FormContext);
  const { fieldName, defaultValue, registerField } = useField(name);

  function handleChange({ hex }) {
    if (!change) setChange(true);
    setColor(hex);
  }

  useEffect(() => {
    registerField({
      ref: color,
      name: fieldName,
      getValue: value => value,
    });

    function listener({ path }) {
      const { current: pickerElement } = pickerRef;

      if (!path.some(element => element === pickerElement) && open) {
        setOpen(false);
      }
    }

    setColor(color || defaultValue || '#000000');
    window.addEventListener('click', listener, false);

    return () => {
      unregisterField(fieldName);
      window.removeEventListener('click', listener);
    };
  }, [open, color, fieldName, registerField, defaultValue, unregisterField]);

  return (
    <Container ref={ref}>
      <Reset
        onClick={() => {
          setChange(false);
          setColor('#000000');
        }}
      >
        {color === '#000000' && (
          <FiCheck size="20px" style={{ strokeWidth: '3' }} />
        )}
      </Reset>

      <PickerContainer
        background={
          // eslint-disable-next-line no-nested-ternary
          change &&
          !pickerColors.flatMap(c => c).some(colors => colors === color)
            ? color
            : !change &&
              !pickerColors
                .flatMap(c => c)
                .concat('#000000')
                .some(colors => colors === color)
            ? color
            : 'transparent'
        }
      >
        <button type="button" onClick={() => setOpen(!open)}>
          <IoMdColorFilter size="20px" color="#fff" />
        </button>

        <PickerContent ref={pickerRef} open={open}>
          <ChromePicker color={color} onChange={handleChange} disableAlpha />
        </PickerContent>
      </PickerContainer>

      <ColorsContainer>
        {pickerColors.map(colors => (
          <div key={colors.join('-')}>
            {colors.map(c => (
              <Color key={c} color={c} onClick={() => handleChange({ hex: c })}>
                {c === color && <FiCheck size="15px" />}
              </Color>
            ))}
          </div>
        ))}
      </ColorsContainer>
    </Container>
  );
};

ColorPickerComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default React.memo(ColorPickerComponent);
