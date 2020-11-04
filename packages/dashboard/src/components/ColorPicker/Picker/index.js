import PropTypes from 'prop-types';
import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { ChromePicker } from 'react-color';
import { FiCheck } from 'react-icons/fi';
import { IoMdColorFilter } from 'react-icons/io';

import { pickerColors } from '@app/config/dashboard';

import { Reset, Container, PickerContainer } from './styles';

const Picker = ({ defaultValue, ...rest }, ref) => {
  const pickerRef = useRef();
  const [open, setOpen] = useState(false);
  const [change, setChange] = useState(false);
  const [color, setColor] = useState(defaultValue);

  function handleChange({ hex }) {
    if (!change) setChange(true);
    setColor(hex);
  }

  useImperativeHandle(
    ref,
    () => ({
      getValue: () => color,
      setValue: value => {
        if (!change) setChange(true);
        setColor(value);
      },
    }),
    [color, change],
  );

  useEffect(() => {
    function listener({ path }) {
      const { current: pickerElement } = pickerRef;

      if (!path.some(element => element === pickerElement) && open) {
        setOpen(false);
      }
    }

    window.addEventListener('click', listener, false);
    return () => window.removeEventListener('click', listener);
  }, [open]);

  return (
    <>
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

      <Container
        background={
          change &&
          !pickerColors.flatMap(c => c).some(colors => colors === color)
            ? color
            : 'transparent'
        }
      >
        <button type="button" onClick={() => setOpen(!open)}>
          <IoMdColorFilter size="20px" color="#fff" />
        </button>

        <PickerContainer ref={pickerRef} open={open}>
          <ChromePicker color={color} onChange={handleChange} {...rest} />
        </PickerContainer>
      </Container>
    </>
  );
};

Picker.propTypes = {
  defaultValue: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

Picker.defaultProps = {
  defaultValue: '',
};

export default forwardRef(Picker);
