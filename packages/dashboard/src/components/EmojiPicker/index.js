import { Picker } from 'emoji-mart';
import PropTypes from 'prop-types';
import React, { useState, useRef, useEffect } from 'react';

import { PickerButton, PickerContainer } from './styles';

const EmojiPickerComponent = ({
  style,
  children,
  handleSelect: defaultSelect,
  ...rest
}) => {
  const pickerRef = useRef();
  const [open, setOpen] = useState(false);

  function handleSelect(emoji) {
    setOpen(false);
    defaultSelect(emoji);
  }

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
    <div style={{ display: 'flex', ...style }}>
      <div style={{ position: 'relative', width: '100%' }}>
        {children}

        <section>
          <PickerButton type="button" onClick={() => setOpen(!open)}>
            <img src="/static/logo_grey.png" alt="Select Logo Button" />
          </PickerButton>

          <PickerContainer
            ref={pickerRef}
            style={{ display: open ? 'block' : 'none' }}
          >
            <Picker
              theme="dark"
              set="twitter"
              emoji="point_up"
              title="Pick your emoji…"
              onSelect={handleSelect}
              style={{ width: '100%', maxWidth: '355px' }}
              {...rest}
            />
          </PickerContainer>
        </section>
      </div>
    </div>
  );
};

EmojiPickerComponent.propTypes = {
  style: PropTypes.shape({}),
  handleSelect: PropTypes.func,
  children: PropTypes.node.isRequired,
};

EmojiPickerComponent.defaultProps = {
  style: {},
  handleSelect: () => {},
};

export default EmojiPickerComponent;
